<script>
    import { LanguageFrequencyStore } from '../stores'
    import { createEventDispatcher } from 'svelte'

    export let keyboardLanguage
    
    const dispatch = createEventDispatcher()

    function onLanguageChange(){
        dispatch('keyboardLanguage', keyboardLanguage)
    }
</script>


<select bind:value={keyboardLanguage} class="form-select" on:change={onLanguageChange}>
    {#each Object.keys($LanguageFrequencyStore) as key}
        <option value="{key}">{key}</option>
    {/each}
</select>
