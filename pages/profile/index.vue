<template>
  <section class="profile">
    <div class="profile__title">プロフィールページ</div>

    <!-- ユーザアイコン -->
    <div class="profile__top__icon">
      <img 
        src="img/profile/karipori.png"
        class="profile__top__icon__image">
    </div>

    <div class="profile__top__data">
      <vs-list>
        <vs-list-header
          icon="build"
          title="基本情報"/>
        <vs-list-item
          v-for="(value, index) in profile.info"
          :key="index"
          :title="value.caption"
          :subtitle="value.value"
          icon="build"/>
      </vs-list>
      <!-- 情報 -->
      <div class="profile__top__data__links">
        <ul class="profile__top__data__links__list">
          <li
            v-for="(value, index) in profile.links"
            :key="index">
            <vs-avatar :src="`img/profile/links/${value.title}.png`"/>
          </li>
        </ul>
      </div>
    </div>

    <div class="profile__talking">
      <vs-list>
        <vs-list-header
          icon="build"
          title="登壇・LT歴"/>
        <vs-list-item
          v-for="(value, index) in profile.talking"
          :key="index"
          :title="value.title"
          :subtitle="value.url"
          icon="build"/>
      </vs-list>
    </div>

  </section>
</template>

<script>
import profile from '~/assets/js/Pages/profile/profile'
import CommonImage from '~/components/Image'

export default {
  components: {
    CommonImage
  },
  data() {
    return {
      profile
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
