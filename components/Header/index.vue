<template>
  <section class="header">
    <!-- 古代版ヘッダ -->
    <header 
      v-if="$store.getters.isOld"
      class="header--header">
      <ul class="header__list header__list__old">
        <li
          v-for="(value, index) in MenuContents.links"
          :key="index" 
          class="header__list__item">
          <MenuButton 
            :text="value.name"
            :link="value.link"/>
        </li>
        <li><ModeChangeButton class="header__mode"/></li>
      </ul>
    </header>
    <!-- 現代版ヘッダ -->
    <div
      v-else-if="$store.getters.isFuture"
      class="header__list header__list__future">
      <vs-navbar>
        <vs-avatar src="/img/profile/karipori.png"/>

        <vs-navbar-title>
          <nuxt-link 
            to="/"
            class="header__list__future__title__text">
            SyukeP's Homepage
          </nuxt-link>
        </vs-navbar-title>

        <vs-spacer/>

        <vs-navbar-item 
          v-for="(value, index) in MenuContents.links"
          :key="index" 
          :index="index">
          <nuxt-link :to="value.link">{{ value.nameEn }}</nuxt-link>
        </vs-navbar-item>
        <vs-navbar-item>
          <ModeChangeButton class="header__mode"/>
        </vs-navbar-item>
      </vs-navbar>
    </div>

  </section>
</template>

<script>
import MenuButton from '@/components/Button/Menu'
import MenuContents from '~/assets/js/Components/Header/menu.js'
import ModeChangeButton from '~/components/Button/ModeChange'

export default {
  components: {
    MenuButton,
    ModeChangeButton
  },
  data() {
    return {
      MenuContents
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
