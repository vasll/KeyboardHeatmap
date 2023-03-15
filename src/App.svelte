<script>
    import KeyboardRows from "./components/KeyboardHeatmap.svelte"
    import LanguageSelect from "./components/LanguageSelect.svelte";
    import LayoutSelect from "./components/LayoutSelect.svelte";

    let keyboardLayout = 'qwerty'   // Initial keyboard layout
    let keyboardLanguage = 'english'  // Initial keyboard layout language
</script>

<main>
	<h1 class="text-center">KeyboardFrequency</h1>
    <KeyboardRows {keyboardLanguage} {keyboardLayout}/>
    <LayoutSelect bind:keyboardLayout/>
    <LanguageSelect bind:keyboardLanguage/>
</main>

<style>
</style>