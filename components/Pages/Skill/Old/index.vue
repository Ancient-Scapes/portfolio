<template>
  <div class="skill">
    <!-- タイトルのコンポーネント化 -->
    <div class="skill--title">
      スキルページ
    </div>

    <!-- 使える言語、技術など -->
    <div class="skill--main">
      <SkillList
        v-for="(value, key) in skill"
        :key="key"
        :data="value.item"
        :list-title="value.title"
        :list-icon="value.icon"
        :img-dir-name="key"/>
    </div>
  </div>
</template>

<script>
import skill from '~/assets/js/Pages/skill/skill.js'
import ImageList from '~/components/ImageList'
import SkillList from '~/components/List/Skill/Old'

export default {
  components: {
    ImageList,
    SkillList
  },
  data() {
    return {
      skill
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
