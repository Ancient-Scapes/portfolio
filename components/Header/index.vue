<template>
  <section class="header">
    <!-- 古代版ヘッダ -->
    <header 
      v-if="$store.getters.isOld"
      class="header--header">
      <ul class="header__list header__list--old">
        <!-- ページリンク -->
        <li
          v-for="(value, index) in MenuContents.links"
          :key="index" 
          class="header__list--old__item">
          <span class="header__list--old__item__text">
            <nuxt-link :to="value.link">
              {{ value.name }}
            </nuxt-link>
          </span>
        </li>
        <!-- モード変更ボタン -->
        <li>
          <ModeChangeButton class="header__list--old__mode"/>
        </li>
      </ul>
    </header>
    <!-- 現代版ヘッダ -->
    <div
      v-else-if="$store.getters.isFuture"
      class="header__list header__list--future">
      <vs-navbar>
        <!-- プロフィール画像 -->
        <vs-avatar src="/img/profile/karipori.png"/>

        <!-- いい感じの余白 -->
        <vs-spacer/>

        <!-- ページリンク -->
        <vs-navbar-item 
          v-for="(value, index) in MenuContents.links"
          :key="index" 
          :index="index">
          <nuxt-link :to="value.link">{{ value.nameEn }}</nuxt-link>
        </vs-navbar-item>
        <!-- モード変更ボタン -->
        <vs-navbar-item>
          <ModeChangeButton class="header__list--future__mode"/>
        </vs-navbar-item>
      </vs-navbar>
    </div>

  </section>
</template>

<script>
import MenuContents from '~/assets/js/Components/Header/menu.js'
import ModeChangeButton from '~/components/Button/ModeChange'

export default {
  components: {
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
