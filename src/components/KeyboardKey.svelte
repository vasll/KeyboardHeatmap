<script>
    export let rowKeysCount = 1
    export let keyValue = '?'

    const flexPercentage = 100/rowKeysCount
</script>


<div class="keyboard-key text-center" style="flex: 1 0 calc({flexPercentage}% - 10px)">
    {keyValue}
</div>


<style>
    .keyboard-key{
        border: 1px solid gray;
        margin: 1px;
        font-size: 24px;
    }
</style>