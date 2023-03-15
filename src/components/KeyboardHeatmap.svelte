<script>
    import { KeyboardLayoutStore } from '../stores/KeyboardLayoutStore'
    import { LanguageFrequencyStore } from '../stores/LanguageFrequencyStore'
	import { onMount } from "svelte"
    import heatmap from "heatmap.js"
    import KeyboardKey from "./KeyboardKey.svelte"

    export let keyboardLayout     // Default kb layout
    export let keyboardLanguage   // Default keyboard language
    export let heatmapRadius      // Default heatmap radius

    let keyboard = null     // Bound to .keyboard
    let keyboardRows = []   // Bound to .keyboardRow (all of them)
    let hasMounted = false  // true after onMount() finishes
    $: currentLayout = $KeyboardLayoutStore[keyboardLayout];    // Load the current layout

    /** Creates data to be used in a keyboard heatmap */
    function getHeatmapData(){
        let heatmapData = []
        let languageFrequency = $LanguageFrequencyStore[keyboardLanguage] // Get languageFrequency data of current language
        let max = 0
        const radiusFactor = window.innerWidth*0.022 // To try keeping heatmap radius similar between screen sizes, radiusFactor is added to radius
        
        keyboardRows.forEach((keyboardRow)=>{
            keyboardRow.childNodes.forEach((childNode)=>{
                if(childNode.classList != null && childNode.classList.contains('keyboard-key')){
                    const childRect = childNode.getBoundingClientRect();    // Get the dimensions of the child div
                    const keyboardRect = keyboard.getBoundingClientRect();  // Get the dimensions of the parent div

                    // Calculate the center absolute coordinates of the child div
                    const centerX = (childRect.right - keyboardRect.left) - (childNode.offsetWidth/2);
                    const centerY = (childRect.bottom - keyboardRect.top) - (childNode.clientHeight/2);
                    
                    const letterFrequency = languageFrequency[childNode.innerText]  // Get the frequency value for that letter
                    if(letterFrequency>max) max = letterFrequency
                    if(letterFrequency != null){    // Exclude cases where letterFrequency is undefined
                        heatmapData.push({
                            x: Math.round(centerX),
                            y: centerY,
                            value: letterFrequency,
                            radius: heatmapRadius+radiusFactor,
                        })
                    }
                }
            })
        })
        return {max: max, data : heatmapData}
    }

    /** Check if .heatmap-canvas exists, if it does remove it, then create the heatmap with data from getHeatmapData() */
    function drawHeatmap(){
        console.log(`drawHeatmap()`)
        if(document.querySelector('.heatmap-canvas') != null){
            document.querySelector('.heatmap-canvas').remove()
        }
        heatmap.create({
            container: document.querySelector('#keyboard'), 
            maxOpacity: .75,
        }).setData(getHeatmapData())
    }

    /** On change of keyboardLanguage, keyboardLayout, heatmapRadius] -> redraw the heatmap */
    $: if(keyboardLanguage || keyboardLayout || heatmapRadius){
        if(hasMounted == true){
            /*  When changing keyboardLayout, this listener is toggled before the DOM updates,
             *  so the drawHeatmap() function draws heatmap data from the previous layout because to draw
             *  the layout, the function takes data from DOM elements which are yet to be updated.
             *  To draw the heatmap after the DOM is already changed, there is a 0ms timeout. 
             *  Is it horrible? Yes. Does it work? Yes */
            setTimeout(()=> {
                console.log(`$:keyboardLayout = ${keyboardLayout}\n$:keyboardLanguage = ${keyboardLanguage}`)
                drawHeatmap()
            }, 0)
        }
    }

    onMount(()=>{
        window.addEventListener('resize', ()=>drawHeatmap(), true);  // Redraw heatmap on window resize
        hasMounted = true   // This will toggle the first heatmap draw
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