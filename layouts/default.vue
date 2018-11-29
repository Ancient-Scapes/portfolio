<template>
  <div class="default">
    <Header class="default--header"/>
    <div class="default--main">
      <nuxt/>
    </div>
    <Footer class="default--footer"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" src="./style.scss"/>
