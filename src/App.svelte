<script>
    import KeyboardRows from "./components/KeyboardHeatmap.svelte"
    import LayoutSelect from "./components/LayoutSelect.svelte";
</script>

<main>
	<h1 class="text-center">KeyboardFrequency</h1>
    <KeyboardRows layoutName={'qwerty'}/>
    <LayoutSelect/>
</main>

<style>
</style>