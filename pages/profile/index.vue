<template>
  <section class="profile">
    <div class="profile--title">
      プロフィールページ
    </div>

    <!-- 使える言語、技術など -->
    <div class="profile--skill">
      <div class="profile--skill__language">
        <!-- 言語 -->
        <vs-list class="profile--skill__language__list">
          <vs-list-header 
            icon="supervisor_account" 
            title="言語"/>
          <vs-list-item
            v-for="(value, index) in skill.language"
            :key="index"
            :title="value.name"
            class="profile--skill__language__list__item">
            <!-- 言語アイコン -->
            <template slot="avatar">
              <CommonImage :src="`/img/profile/language/${value.name}.png`"/>
            </template>

            <!-- フレームワークなどのアイコン -->
            <div class="profile--skill__language__list__item__sub">
              <ImageList :src="srcFramework(value.framework)"/>
              <!-- TODO 画像を複数横並びにするコンポーネント -->
            </div>
          </vs-list-item>
        </vs-list>
      </div>
      <!-- <div class="profile--skill__javaScriptTools"></div>
      <div class="profile--skill__design"></div>
      <div class="profile--skill__db"></div>
      <div class="profile--skill__os"></div>
      <div class="profile--skill__other"></div> -->
    </div>
    <!-- 業務経歴など -->
    <!-- <div class="profile--history"></div> -->
    <!-- 成果物など -->
    <!-- <div class="profile--works"></div> -->
  </section>
</template>

<script>
import skill from '~/assets/js/profile/skill.js'
import CommonImage from '~/components/Image/index.vue'
import ImageList from '~/components/ImageList/index.vue'

export default {
  components: {
    CommonImage,
    ImageList
  },
  data() {
    return {
      skill
    }
  },
  methods: {
    srcFramework(framework) {
      return Array.prototype.map.call(Object(framework), value => {
        return `/img/profile/framework/${value}.png`
      })
    }
  }
}
</script>

<style lang="scss" src="~/pages/profile/style.scss"/>
