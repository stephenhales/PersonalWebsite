<template>
	<div>
		<div class="row">
			<div class="col-md-4">
				<img src="../../../imgs/projectIcons/cleanEarth.png" class="icon-photo">
			</div>
			<div class="col-md-8">
				<h1>CleanEarth.Life</h1>
			</div>
		</div>
		<div class="row">
			<div>
				<img src="team-photo" class="team-photo">
			</div>
		</div>
		<div class="row">
			<div>
				<p>We created this at a Hackathon in Dallas 2017 over Earthday weekend.</p>
				<p>The goal of this website was to show that a single person can make a significant on their ecological footprint.</p>
				<p>We set about solving this problem with a website which could track a users progress over time. The user account was implemented with JSP which allowed us
					to develop a lightweight application faster. We decided to learn a new language over the course of the weekend, and decided upon Vue.js which would
					allow our front end to be composed of easy to build components. This allowed us to create content really fast. Our biggest bottleneck over the course of the
					weekend was actually doing the research for each of the statistics.</p>
				<p>From this hackathon, we learned to focus more on the business ideas of an application rather than the implementation. A lot of our time went into developing a
					highly refined website instead of developing a proof of concept which was not as refined. As a result, we have a website that has a great looking home page
					but the scope was limited.</p>
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
	.icon-photo{
		width: 10vh;
		height: 10vh;
	}
	.team-photo{

	}
</style>
