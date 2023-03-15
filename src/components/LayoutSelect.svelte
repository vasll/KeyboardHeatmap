<script>
    import { LayoutStore } from '../stores/KeyboardLayoutStore'
    export let keyboardLayout
</script>


<select bind:value={keyboardLayout} class="form-select">
    {#each Object.keys($LayoutStore) as key}
        <option value="{key}">{key}</option>
    {/each}
</select>
