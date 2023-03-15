<script>
    import { KeyboardLayoutStore } from '../stores/KeyboardLayoutStore'
    export let keyboardLayout
</script>


<select bind:value={keyboardLayout} class="form-select fs-5">
    {#each Object.keys($KeyboardLayoutStore).sort() as key}
        <option value="{key}">{key}</option>
    {/each}
</select>

<style>

</style>