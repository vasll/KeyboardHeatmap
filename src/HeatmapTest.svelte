<script>
	// This is a heatmap test thingy
	import heatmap from "heatmap.js"
	import { onMount } from "svelte"

	onMount(()=>{
		var heatmapObj = heatmap.create({
			container: document.querySelector('#heatmapContainer')
		}).setData({
			max: 50,
			data: [
				{x: 10, y: 15, value: 50},
				{x: 70, y: 54, value: 48}
			]
		})
	})
</script>



<div id="heatmapContainer">
</div>


<style>
	#heatmapContainer{
		height: 200px;
		width: 200px;
		border: 1px solid red
	}
</style>