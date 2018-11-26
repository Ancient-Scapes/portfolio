<template>
  <div class="image__wrapper">
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
    }
  }
}
</script>

<style lang="scss" src="~/components/Image/style.scss"/>
