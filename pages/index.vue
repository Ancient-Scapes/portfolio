<template>
  <article>
    <Header/>
    <section class="home">
      <div
        v-if="$store.getters.isOld" 
        class="home--title__wrapper__old">
        <marquee 
          behavior="scroll" 
          direction="left"
          class="home--title__text">しゅけピーのホームページ</marquee>
      </div>
      <div 
        v-else-if="$store.getters.isFuture"
        class="home--title__wrapper__future">
        <h1 class="home--title__text">
          しゅけピーのホームページ
        </h1>

        <span class="home--title__description">
          ああ
        </span>
      </div>
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
