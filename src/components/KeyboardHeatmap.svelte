<script>
    import { LayoutStore, LanguageFrequencyStore } from '../stores'
	import { onMount } from "svelte"
    import heatmap from "heatmap.js"
    import KeyboardKey from "./KeyboardKey.svelte"

    export let keyboardLayout    // Default kb layout
    export let layoutLanguage   // Default keyboard language

    let keyboard = null     // Bound to .keyboard
    let keyboardRows = []   // Bound to .keyboardRow (all of them)

    $: currentLayout = $LayoutStore[keyboardLayout];    // Load the current layout

    /** On keyboardLayout value change listener (reactive Svelte variable) */
    $: if(keyboardLayout){
        console.log(`[KeyboardHeatmap] keyboardLayout: ${keyboardLayout}`)
    }

    /** Creates data to be used in a keyboard heatmap */
    function getHeatmapData(){
        let heatmapData = []
        let languageFrequency = $LanguageFrequencyStore[layoutLanguage] // Get languageFrequency data of current language
        let max = 0
        const radiusFactor = window.innerWidth*0.022 // To try keeping heatmap radius similar between screen sizes, radiusFactor is added to radius
        
        keyboardRows.forEach((keyboardRow)=>{
            keyboardRow.childNodes.forEach((childNode)=>{
                if(childNode.classList != null && childNode.classList.contains('keyboard-key')){
                    const childRect = childNode.getBoundingClientRect();    // Get the dimensions of the child div
                    const keyboardRect = keyboard.getBoundingClientRect();  // Get the dimensions of the parent div

                    // Calculate the center absolute coordinates of the child div
                    // TODO coordinates are absolute to the page and not to the container, fix this.
                    const centerX = (childRect.right - keyboardRect.left) - (childNode.offsetWidth/2);
                    const centerY = (childRect.bottom - keyboardRect.top) - (keyboardRect.top/keyboardRows.length);
                    
                    const letterFrequency = languageFrequency[childNode.innerText]  // Get the frequency value for that letter
                    if(letterFrequency>max) max = letterFrequency
                    
                    heatmapData.push({
                        x: Math.round(centerX),
                        y: centerY,
                        value: letterFrequency,
                        radius: 80+radiusFactor,
                    })
                }
            })
        })
        return {max: max, data : heatmapData}
    }

    /** Check if .heatmap-canvas exists, if it does remove it, then create the heatmap with data from getHeatmapData() */
    function drawHeatmap(){
        console.log(`[KeyboardHeatmap] drawHeatmap()`)
        if(document.querySelector('.heatmap-canvas') != null){
            document.querySelector('.heatmap-canvas').remove()
        }
        heatmap.create({container: document.querySelector('#keyboard')}).setData(getHeatmapData())
    }

    onMount(()=>{
        drawHeatmap()   // Draw heatmap for the first time
        window.addEventListener('resize', ()=>drawHeatmap(), true);  // Redraw heatmap on window resize
    })
</script>

<div id="keyboard" bind:this={keyboard}>
    {#each currentLayout['keyboardRows'] as keyboardRow, rowIndex}
        <div class="keyboard-row d-flex flex-wrap" bind:this={keyboardRows[rowIndex]}>
            {#each keyboardRow as key}
                <KeyboardKey keyValue={key} rowKeysCount={keyboardRow.length}/>
            {/each}
        </div>
    {/each}
</div>


<style>

</style>