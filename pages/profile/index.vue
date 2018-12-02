<template>
  <section class="profile">
    <div class="profile--title">
      プロフィールページ
    </div>

    <!-- 使える言語、技術など -->
    <div class="profile--skill">

      <SkillList
        v-for="(value, key) in skill"
        :key="key"
        :data="value.item"
        :list-title="value.title"
        :list-icon="value.icon"
        :img-dir-name="key"/>

    </div>
    <!-- 業務経歴など -->
    <!-- <div class="profile--history"></div> -->
    <!-- 成果物など -->
    <!-- <div class="profile--works"></div> -->
  </section>
</template>

<script>
import skill from '~/assets/js/Pages/profile/skill.js'
import CommonImage from '~/components/Image'
import ImageList from '~/components/ImageList'
import SkillList from '~/components/List/Skill'

export default {
  layouts: 'default',
  components: {
    CommonImage,
    ImageList,
    SkillList
  },
  data() {
    return {
      skill
    }
  },
  methods: {
    getSrc(arr, dirName) {
      return Array.prototype.map.call(Object(arr), value => {
        return `/img/profile/${dirName}/${value}.png`
      })
    }
  }
}
</script>

<style lang="scss" src="~/pages/profile/style.scss"/>
