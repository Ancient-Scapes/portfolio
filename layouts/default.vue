<template>
  <div>
    <Header class="header"/>
    <div class="main">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>


<style lang="scss" src="./style.scss"/>
