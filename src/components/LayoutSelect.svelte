<script>
    import { KeyboardLayoutStore } from '../stores/KeyboardLayoutStore'
    export let keyboardLayout
</script>


<select bind:value={keyboardLayout} class="form-select fs-5">
    {#each Object.keys(Object.fromEntries(Object.entries($KeyboardLayoutStore).sort())) as key} <!-- Pretty sure this code is extremely bad -->
        <option value="{key}">{key}</option>
    {/each}
</select>

<style>

</style>