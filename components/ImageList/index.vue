<template>
  <ul class="image--list">
    <li
      v-for="(value, index) in src"
      :key="index" 
      class="image--list__item">
      <CommonImage :src="value"/>
    </li>
  </ul>
</template>

<script>
import CommonImage from '~/components/Image/index.vue'

export default {
  components: {
    CommonImage
  },
  props: {
    src: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" src="~/components/ImageList/style.scss"/>
