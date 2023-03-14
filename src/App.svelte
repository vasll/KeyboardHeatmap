<script>
	import heatmap from "heatmap.js"
	import { onMount } from "svelte"

	onMount(()=>{
		var heatmapObj = heatmap.create({
			container: document.querySelector('#heatmapContainer')
		}).setData({
			max: 5,
			data: [
				{x: 10, y: 15, value: 5},
				{x: 100, y: 54, value: 5}
			]
		})
	})
</script>

<main>
	<h1>Hello?</h1>
	<div id="heatmapContainer">
	</div>
</main>

<style>
	#heatmapContainer{
		height: 200px;
		width: 200px;
		border: 1px solid red
	}
</style>