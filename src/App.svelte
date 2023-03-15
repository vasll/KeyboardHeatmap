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
    <div class="fs-1 text-center">KeyboardHeatmap</div>    
    <KeyboardHeatmap {keyboardLanguage} {keyboardLayout} {heatmapRadius}/>
    <RadiusSlider bind:heatmapRadius/>
    <div class="d-flex align-items-center justify-content-between mb-1">
        <LayoutSelect bind:keyboardLayout/>
        <LanguageSelect bind:keyboardLanguage/>
    </div>

</main>

<style>
</style>