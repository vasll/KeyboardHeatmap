<script>
    import {LayoutStore} from '../stores'
    import { createEventDispatcher } from 'svelte'

    export let keyboardLayout
    
    const dispatch = createEventDispatcher()

    function onLayoutChange(){
        dispatch('keyboardLayout', keyboardLayout)
    }
</script>


<select bind:value={keyboardLayout} class="form-select" on:change={onLayoutChange}>
    {#each Object.keys($LayoutStore) as key}
        <option value="{key}">{key}</option>
    {/each}
</select>

<style>

</style>