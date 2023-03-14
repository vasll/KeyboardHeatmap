<script>
    import KeyboardKey from "./KeyboardKey.svelte"
    export let keyColumnCount = 8
</script>



<div class="keyboard-row">
    {#each new Array(keyColumnCount) as _}
        <KeyboardKey {keyColumnCount}/>
    {/each}
</div>


<style>
    .keyboard-row{
        display: flex;
        flex-wrap: wrap;
    }
</style>