<template>
  <div :class="`image__wrapper${small}`">
    <img 
      :src="src" 
      class="image__main">
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    isSmall: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    small() {
      return this.isSmall ? '__small' : ''
    }
  }
}
</script>

<style lang="scss" src="~/components/Image/style.scss"/>
