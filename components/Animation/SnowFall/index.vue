<template>
  <div id="snowfall"/>
</template>

<script>
import snow from '~/assets/js/components/Animation/snow.js'

export default {
  mounted() {
    window.particlesJS('snowfall', snow.data)
  }
}
</script>

<style lang="scss" src="./style.scss"/>
