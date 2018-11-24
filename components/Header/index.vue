<template>
  <section class="header">
    <ul class="header__list">
      <li
        v-for="(value, index) in links"
        :key="index" 
        class="header__list__item">
        <MenuButton 
          :text="value.name"
          :link="value.link"/>
      </li>
      <li class="header__list__item">
        <vs-button
          icon="star"
          @click="$store.commit('changeMode')">
          モード変更
        </vs-button>
      </li>
    </ul>
  </section>
</template>

<script>
import MenuButton from '@/components/Button/Menu/index.vue'

export default {
  components: {
    MenuButton
  },
  data() {
    return {
      links: [
        {
          name: 'ホーム',
          link: '/'
        },
        {
          name: 'プロフィール',
          link: '/profile'
        },
        {
          name: 'スキル',
          link: '/skill'
        },
        {
          name: '経歴',
          link: '/history'
        },
        {
          name: '工事中',
          link: '/questions'
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="~/components/Header/style.scss"/>
