<template>

	<div id='content' style='background-color:white'>
        <div class='fullscreen' id='intro'>
            <div>
                <img src="../../imgs/ricardo-gomez-angel-210602.jpg" alt="introPic" class="photo">
            </div>
            <div class="component">
                <div class="component-section">
                    <intro-component></intro-component>
                </div>
            </div>
        </div>
        <div class='fullscreen' id='water'>
            <div class="bottom_aligner">
                 <a href="#pollution" v-on:click='scroll("pollution")'><i class="fa fa-angle-down" style="font-size:7em"></i></a>
            </div>
        </div>
	</div>
</template>

<script>
import LoginComponent from './LoginComponent.vue'
import IntroComponent from './IntroComponent.vue'
import NavComponent from './NavComponent.vue'
import HomeComponent from './HomeComponent.vue'
import WaterComponent from './WaterComponent.vue'
import PollutionComponent from './PollutionComponent.vue'
import ConclusionComponent from './ConclusionComponent.vue'
import LightsComponent from './LightsComponent.vue'
import PlasticBottleComponent from './PlasticBottleComponent.vue'
import MeatComponent from './MeatComponent.vue'
import PledgeComponent from './PledgeComponent.vue'

export default {
  components: { NavComponent, HomeComponent, LoginComponent, IntroComponent, PollutionComponent, WaterComponent, ConclusionComponent, LightsComponent, PlasticBottleComponent, MeatComponent, PledgeComponent },
  methods: {
    scroll: function (id) {
      this.$SmoothScroll(document.getElementById(id))
    }
  }
}
</script>

<style lang="sass">
.fullscreen {
    height: 100vh;
}

.component {
    padding-left: 20vw;
    padding-right: 20vw;
    width: 100%;
}
.component-section {
    padding: 10vh 10px;
}


.photo {
    margin: 0 auto;
    width: 100%;
    height: 300px;
}

</style>
