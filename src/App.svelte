<script>
    import KeyboardRows from "./components/KeyboardHeatmap.svelte"
    import LayoutSelect from "./components/LayoutSelect.svelte";

    let keyboardLayout = 'qwerty'   // Initial keyboard layout
    let layoutLanguage = 'english'  // Initial keyboard layout language

    function changeKeyboardLayout(event){ //TODO forward keyboardLayout to keyboardHeatmap somehow
        keyboardLayout = event.detail
    }
</script>

<main>
	<h1 class="text-center">KeyboardFrequency</h1>
    <KeyboardRows {layoutLanguage} {keyboardLayout}/>
    <LayoutSelect on:keyboardLayout={changeKeyboardLayout}/>
</main>

<style>
</style>