<script>
    import KeyboardHeatmap from "./components/KeyboardHeatmap.svelte"
    import LanguageSelect from "./components/LanguageSelect.svelte";
    import LayoutSelect from "./components/LayoutSelect.svelte";
    import RadiusSlider from "./components/RadiusSlider.svelte";

    let heatmapRadius = 80
    let keyboardLayout = 'qwerty'   // Initial keyboard layout
    let keyboardLanguage = 'english'  // Initial keyboard layout language
</script>

<main class="mx-1">
    <div class="d-flex align-items-center justify-content-between">
        <div class="fs-2">{keyboardLanguage}</div>
        <div class="fs-2">{keyboardLayout}</div>
    </div>
    
    <KeyboardHeatmap {keyboardLanguage} {keyboardLayout} {heatmapRadius}/>
    <RadiusSlider bind:heatmapRadius/>
    <LayoutSelect bind:keyboardLayout/>
    <LanguageSelect bind:keyboardLanguage/>

</main>

<style>
</style>