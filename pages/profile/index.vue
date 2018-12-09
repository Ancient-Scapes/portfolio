<template>
  <section class="profile">
    <div class="profile--title">
      プロフィールページ
    </div>
  </section>
</template>

<script>
import skill from '~/assets/js/Pages/profile/skill.js'
import CommonImage from '~/components/Image'

export default {
  components: {
    CommonImage
  },
  data() {
    return {
      skill
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
