<template>
	<div class="row">
		<h2>Browser for the Internet of Things</h2>
	</div>
	<div class="row">
		<div class="col-md-4">
			<img src="../../imgs/projectIcons/utdesign.jpg" class="project-photo">
		</div>
		<div class="col-md-8">
			<p>Smartphone browser that utilizes bluetooth discovery, NFC, and object recognition to afford users proximity discovery,
				intuitive selection, and live interaction with the various types of Internet of Things devices they will encounter.	</p>
			<p>My teammates and I developed this project as our UTDesign senior year project.</p>
		</div>
	</div>
</template>

<script>

export default {
  data: function () {
    return {
      minutes: 2,
      waterSaved: 0
    }
  },
  created: function () {
    this.waterSaved = this.minutes * 2.1
  },
  watch: {
	  'minutes' (to, from) {
    this.waterSaved = (this.minutes * 2.1).toFixed(1);
	  }
  }
}
</script>

<style lang="sass">
#child {
display: inline-block;
       vertical-align: top;
}
</style>
