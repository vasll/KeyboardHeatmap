<script>
    export let rowKeysCount = 1
    export let keyValue = '?'

    $: flexPercentage = 100/rowKeysCount
</script>


<div class="keyboard-key text-center" style="flex: 1 0 calc({flexPercentage}% - 10px)">
    <p class="p-0 m-0">{keyValue}</p>
</div>


<style>
    .keyboard-key{
        border: 1px solid gray;
        margin: 1px;
        font-size: 24px;
    }
</style>