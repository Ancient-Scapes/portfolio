<template>
  <section class="home">

    <div
      v-if="$store.getters.isOld" 
      class="home--title__old">
      <marquee 
        behavior="scroll" 
        direction="left"
        class="home--title__old__text">しゅけピーのホームページ</marquee>
      
      <span class="home--title__old__description">
        Sorry, This Homepage is Japanese Only.
      </span>
    </div>
    <div 
      v-else-if="$store.getters.isFuture"
      class="home--title__future">
      <SnowFall/>
      <h1 class="home--title__future__text">
        しゅけピーのホームページ
      </h1>

      <span class="home--title__future__description">
        たかし
      </span>
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header'
import SnowFall from '~/components/Animation/SnowFall'

export default {
  components: {
    Header,
    SnowFall
  }
}
</script>

<style lang="scss" src="./style.scss"/>
