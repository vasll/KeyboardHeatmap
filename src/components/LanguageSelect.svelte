<script>
    import { LanguageFrequencyStore } from '../stores/LanguageFrequencyStore'
    export let keyboardLanguage
</script>


<select bind:value={keyboardLanguage} class="form-select">
    {#each Object.keys(Object.fromEntries(Object.entries($LanguageFrequencyStore).sort())) as key} <!-- Pretty sure this code is extremely bad -->
        <option value="{key}">{key}</option>
    {/each}
</select>
