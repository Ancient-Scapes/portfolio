<template>
  <section class="header">
    <ul
      v-if="$store.getters.isOld"
      class="header__list header__list__old">
      <li
        v-for="(value, index) in MenuContents.links"
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
        v-for="(value, index) in MenuContents.links"
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
import MenuContents from '~/assets/js/Components/Header/menu.js'

export default {
  components: {
    MenuButton
  },
  data() {
    return {
      MenuContents
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
