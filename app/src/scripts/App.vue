<template>
<div>
<link rel="stylesheet"
	  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	  crossorigin="anonymous">
<nav-component></nav-component>
<router-view></router-view>
<footer-component></footer-component>
</div>
</template>

<script>
import NavComponent from './components/NavComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  name: 'app',
  components: { NavComponent, FooterComponent }
}
</script>

<style lang="sass">

</style>
