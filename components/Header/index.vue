<template>
  <section class="header">
    <ul class="header__list">
      <li
        v-for="(value, index) in links"
        :key="index" 
        class="header__list__item">
        <vs-button
          :color="value.color"
          :type="value.type">
          {{ value.name }}
        </vs-button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'ホーム',
          color: 'primary',
          type: 'gradient',
          link: '/'
        },
        {
          name: 'プロフィール',
          color: 'success',
          type: 'gradient',
          link: '/profile'
        },
        {
          name: 'スキル',
          color: 'dark',
          type: 'gradient',
          link: '/skill'
        },
        {
          name: '経歴',
          color: 'danger',
          type: 'gradient',
          link: '/history'
        },
        {
          name: '工事中',
          color: 'warning',
          type: 'gradient',
          link: '/questions'
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="~/components/Header/style.scss"/>
