<template>
  <div class="default">
    <Header class="default__header"/>
    <section class="default__main">
      <nuxt/>
    </section>
    <Footer class="default__footer"/>
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
