<template>
  <ul class="image--list">
    <li
      v-for="(value, index) in src"
      :key="index" 
      class="image--list__item">
      <CommonImage 
        :src="value"
        :is-small="true"/>
      <div class="image--list__item__description">
        <vs-chip>
          {{ description[index] }}
        </vs-chip>
      </div>
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
    },
    description: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" src="~/components/ImageList/style.scss"/>
