<script>
    import {LayoutStore} from '../stores'
    import KeyboardKey from "./KeyboardKey.svelte"
    export let layoutName = 'qwerty'

    let currentLayout = null

    $LayoutStore.forEach((layout)=>{
        if(layout['name'] == layoutName){
            currentLayout = layout
        }
    })

</script>


{#each currentLayout['keyboardRows'] as keyboardRow}
    <div class="keyboard-row">
        {#each keyboardRow as key}
            <KeyboardKey keyValue={key} rowKeysCount={keyboardRow.length}/>
        {/each}
    </div>
{/each}


<style>
    .keyboard-row{
        display: flex;
        flex-wrap: wrap;
    }
</style>