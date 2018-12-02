<template>
  <div id="snowfall"/>
</template>

<script>
import snow from '~/assets/js/components/Animation/snow.js'

export default {
  data() {
    return {
      snow
    }
  },
  mounted() {
    require('particles.js')
    window.particlesJS('snowfall', snow.data)
  }
}
</script>

<style lang="scss" src="./style.scss"/>
