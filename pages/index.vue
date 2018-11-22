<template>
  <article>
    <Header/>
    <section class="home">
      <!-- <marquee 
        behavior="scroll" 
        direction="left"
        class="home__title">ホームページ</marquee> -->
    </section>
  </article>
</template>

<script>
import Header from '@/components/Header/index.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" src="~/pages/style.scss"/>
