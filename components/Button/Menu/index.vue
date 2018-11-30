<template>
  <div class="button">
    <span class="button__text">
      <nuxt-link :to="link">{{ text }}</nuxt-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
