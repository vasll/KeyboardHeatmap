<script>
    import KeyboardRows from "./components/KeyboardHeatmap.svelte"
    import LanguageSelect from "./components/LanguageSelect.svelte";
    import LayoutSelect from "./components/LayoutSelect.svelte";

    let keyboardLayout = 'qwerty'   // Initial keyboard layout
    let keyboardLanguage = 'english'  // Initial keyboard layout language
</script>

<main class="mx-1">
    <div class="d-flex align-items-center justify-content-between">
        <div class="fs-2">{keyboardLanguage}</div>
        <div class="fs-2">{keyboardLayout}</div>
    </div>
    
    <KeyboardRows {keyboardLanguage} {keyboardLayout}/>
    <LayoutSelect bind:keyboardLayout/>
    <LanguageSelect bind:keyboardLanguage/>
</main>

<style>
</style>