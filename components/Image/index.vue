<template>
  <div :class="`image__wrapper image__wrapper${imageType}`">
    <a
      v-if="link" 
      :href="link">
      <img 
        :src="src" 
        :class="`image__main image__main${imageType}`">
    </a>
    <img 
      v-else
      :src="src" 
      :class="`image__main image__main${imageType}`">
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
    },
    isIcon: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: null
    }
  },
  computed: {
    imageType() {
      let addClass

      if (this.isSmall) {
        addClass = '__small'
      } else if (this.isIcon) {
        addClass = '__icon'
      } else {
        addClass = ''
      }

      return addClass
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
