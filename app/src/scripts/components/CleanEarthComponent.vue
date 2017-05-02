<template>
	<div>
		<div class="row">
			<h2>CleanEarth.Life</h2>
		</div>
		<div class="row">
			<div class="col-md-4">
				<img src="../../imgs/cleanEarth.png" class="project-photo">
			</div>
			<div class="col-md-8">
				<p>We created this at an Earthday themed Hackathon to show that a single person can make a significant on their ecological footprint.</p>
				<p>People don't realize what impact a few small changes every day can have on their environmental impact.
					We've done the algorithms and research for you in order to give you accurate results. The end product is both shocking and humbling.</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data: function () {
		return {
			traditionalBulb: 2
		}
	}
}
</script>

<style lang="sass">
	.project-photo{
		width: 40vh;
		height: 40vh;
	}
</style>
