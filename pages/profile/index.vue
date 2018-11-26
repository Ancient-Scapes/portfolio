<template>
  <section class="profile">
    <div class="profile--title">
      プロフィールページ
    </div>

    <!-- 使える言語、技術など -->
    <div class="profile--skill">
      <div class="profile--skill__language">
        <vs-list class="profile--skill__language__list">
          <vs-list-header 
            icon="supervisor_account" 
            title="言語"/>
          <vs-list-item
            v-for="(value, index) in skill.language"
            :key="index"
            :title="value"
            class="profile--skill__language__list__item">
            <template slot="avatar">
              <div class="profile--skill__language__list__item__wrapper">
                <img 
                  :src="`/img/profile/language/${value}.png`"
                  class="profile--skill__language__list__item__icon">
              </div>
            </template>
          </vs-list-item>
        </vs-list>
      </div>
      <!-- <div class="profile--skill__framework"></div>
      <div class="profile--skill__javaScriptTools"></div>
      <div class="profile--skill__design"></div>
      <div class="profile--skill__db"></div>
      <div class="profile--skill__os"></div>
      <div class="profile--skill__tools"></div> -->
    </div>
    <!-- 業務経歴など -->
    <!-- <div class="profile--history"></div> -->
    <!-- 成果物など -->
    <!-- <div class="profile--works"></div> -->
  </section>
</template>

<script>
import skill from '~/assets/js/profile/skill.js'

export default {
  data() {
    return {
      skill
    }
  }
}
</script>

<style lang="scss" src="~/pages/profile/style.scss"/>
