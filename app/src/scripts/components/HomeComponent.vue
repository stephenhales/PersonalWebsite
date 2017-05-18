<template>

	<div id='content' style='background-color:white'>
        <div class='row fullscreen' id='intro'>
            <div>
                <img src="../../imgs/ricardo-gomez-angel-210602.jpg" alt="introPic" class="border-photo">
            </div>
            <div class="component">
                <div class="component-section">
                    <intro-component></intro-component>
                </div>
                <div class="bottom_aligner">
                    <a href="#projects" v-on:click='scroll("projects")'><i class="fa fa-angle-down" style="font-size:7em"></i></a>
                </div>
            </div>
        </div>
        <div id='projects' class="row">
            <div>
                <img src="../../imgs/code.jpg" alt="introPic" class="border-photo">
            </div>
            <div class="component">
                <div class="project-section">
                    <clean-earth-component></clean-earth-component>
                </div>
            </div>
            <div class="component">
                <div class="project-section">
                    <iot-browser-component></iot-browser-component>
                </div>
            </div>
        </div>
        <div id="contact" class="row">
            <div class="component">
                <div class="component-section">
                    <contact-component></contact-component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IntroComponent from './IntroComponent.vue'
import NavComponent from './NavComponent.vue'
import HomeComponent from './HomeComponent.vue'
import CleanEarthComponent from './CleanEarthComponent.vue'
import IotBrowserComponent from './IoTBrowserComponent.vue'
import ContactComponent from './ContactComponent.vue'

export default {
  components: { NavComponent, HomeComponent, IntroComponent, CleanEarthComponent, IotBrowserComponent, ContactComponent },
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
    min-height: 600px;
}

.component {
    padding-left: 20vw;
    padding-right: 20vw;
    width: 100%;
    min-height: 200px;
}

.component-section {
    padding: 10vh 10px;
}

.project-section {
    padding: 10vh 10px;
    z-index: -1;
    font-size: 14px;
}

.border-photo {
    margin: 0 auto;
    width: 100%;
    height: 300px;
}

</style>
