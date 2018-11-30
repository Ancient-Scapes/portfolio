<template>
  <section class="header">
    <ul
      v-if="$store.getters.isOld"
      class="header__list header__list__old">
      <li
        v-for="(value, index) in links"
        :key="index" 
        class="header__list__item header__list__item__old">
        <MenuButton 
          :text="value.name"
          :link="value.link"/>
      </li>
    </ul>
    <ul
      v-else-if="$store.getters.isFuture"
      class="header__list header__list__future">
      <li
        v-for="(value, index) in links"
        :key="index" 
        class="header__list__item header__list__item__future">
        <vs-button>
          <nuxt-link :to="value.link">
            {{ value.name }}
          </nuxt-link>
        </vs-button>
      </li>
    </ul>

    <div class="header__mode">
      <vs-chip>
        <vs-avatar
          icon="thumb_up"
          @click="$store.commit('changeMode')"/>
        {{ $store.getters.getMode }}
      </vs-chip>
    </div>
  </section>
</template>

<script>
import MenuButton from '@/components/Button/Menu'

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

<style lang="scss" src="./style.scss"/>
