<script>
    import { LanguageFrequencyStore } from '../stores/LanguageFrequencyStore'
    export let keyboardLanguage
</script>


<select bind:value={keyboardLanguage} class="form-select">
    {#each Object.keys($LanguageFrequencyStore) as key}
        <option value="{key}">{key}</option>
    {/each}
</select>
