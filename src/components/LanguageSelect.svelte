<script>
    import { LanguageFrequencyStore } from '../stores/LanguageFrequencyStore'
    export let keyboardLanguage
</script>


<select bind:value={keyboardLanguage} class="form-select fs-5 shadow-none">
    {#each Object.keys($LanguageFrequencyStore).sort() as key}
        <option value="{key}">{key}</option>
    {/each}
</select>
