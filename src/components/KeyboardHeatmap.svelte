<script>
    import {LayoutStore, LanguageFrequencyStore} from '../stores'
	import { onMount } from "svelte"
    import heatmap from "heatmap.js"
    import KeyboardKey from "./KeyboardKey.svelte"

    export let keyboardLayout    // Default kb layout
    export let layoutLanguage   // Default language

    let keyboard = null     // HTML keyboard div
    let keyboardRows = []   // HTML keyboardRow divs
    let currentLayout = $LayoutStore[keyboardLayout];    // Load the current layout

    /** Creates data to be used in a heatmap */
    function getHeatmapData(){
        let heatmapData = []
        let languageFrequency = $LanguageFrequencyStore[layoutLanguage] // Get languageFrequency data of current language
        let max = 0
        const radiusFactor = window.innerWidth*0.01 // To keep heatmap radius similar between screen sizes, radiusFactor is decreased from radius
        
        keyboardRows.forEach((keyboardRow)=>{
            keyboardRow.childNodes.forEach((childNode)=>{
                if(childNode.classList != null && childNode.classList.contains('keyboard-key')){
                    const childRect = childNode.getBoundingClientRect();    // Get the dimensions of the child div
                    const keyboardRect = keyboard.getBoundingClientRect();  // Get the dimensions of the parent div

                    // Calculate the center absolute coordinates of the child div
                    const centerX = (childRect.right - keyboardRect.left) - (childNode.offsetWidth/2);
                    const centerY = (childRect.bottom - keyboardRect.top) - (keyboardRect.top/keyboardRows.length);
                    
                    const letterFrequency = languageFrequency[childNode.innerText]  // Get the frequency for that letter
                    if(letterFrequency>max) max = letterFrequency
                    
                    heatmapData.push({
                        x: Math.round(centerX),
                        y: centerY,
                        value: letterFrequency,
                        radius: 75+radiusFactor,
                    })
                }
            })
        })
        return {max: max, data : heatmapData}
    }

    var heatmapJs = null
    function drawHeatmap(){
        document.querySelector('.heatmap-canvas').remove()
        heatmapJs = heatmap.create({container: document.querySelector('#keyboard')}).setData(getHeatmapData())
    }

    onMount(()=>{
        heatmapJs = heatmap.create({container: document.querySelector('#keyboard')}).setData(getHeatmapData())
    })

    window.addEventListener('resize', (event)=>{drawHeatmap()}, true);  // Redraw heatmap on window resize
    
</script>

<div id="keyboard" bind:this={keyboard}>
    {#each currentLayout['keyboardRows'] as keyboardRow, rowIndex}
        <div class="keyboard-row" bind:this={keyboardRows[rowIndex]}>
            {#each keyboardRow as key}
                <KeyboardKey keyValue={key} rowKeysCount={keyboardRow.length}/>
            {/each}
        </div>
    {/each}
</div>


<style>
    .keyboard-row{
        display: flex;
        flex-wrap: wrap;
    }
</style>