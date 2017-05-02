<template>
<div>
	<h1>Welcome</h1>
	<form action="/logout" method="post">
		<button>Log Out</button>
	</form>

	<form action="/calculate" method="post">
		<div class='fullscreen' id='water' style='background-color:#00b0ff'>
			<div id='component'>

			</div>
		</div>
		<div class='fullscreen' id='water' style='background-color:#bdbdbd'>
			<div id='component'>

			</div>
		</div>
		<div class='fullscreen' id='water' style='background-color:#ffea00'>
			<div id='component'>

			</div>
		</div>



	</form>
</div>
</template>

<script>
//import WaterProfileComponent from './WaterProfileComponent.vue'


export default {
  name: 'profile',
  components: {  },
  methods: {

  }
}

</script>

<style lang="sass">
	.fullscreen {
		width: 100%;
		height: 100vh;
	}

	#component {
		margin: 0 auto;
		max-width: 800px;
		padding-top: 60px;
		padding-left: 20px;
		padding-right: 20px;
	}

</style>
