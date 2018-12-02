<template>
  <div class="default">
    <SnowFall/>
    <Header class="default--header"/>
    <section class="default--main">
      <nuxt/>
    </section>
    <Footer class="default--footer"/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import SnowFall from '~/components/Animation/SnowFall'

export default {
  components: {
    Header,
    Footer,
    SnowFall
  }
}
</script>

<style lang="scss" src="./style.scss"/>
