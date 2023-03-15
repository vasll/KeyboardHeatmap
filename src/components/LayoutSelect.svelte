<script>
    import { KeyboardLayoutStore } from '../stores/KeyboardLayoutStore'
    export let keyboardLayout
</script>


<select bind:value={keyboardLayout} class="form-select">
    {#each Object.keys($KeyboardLayoutStore) as key}
        <option value="{key}">{key}</option>
    {/each}
</select>
