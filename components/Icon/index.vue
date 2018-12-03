<template>
  <i class="material-icons">{{ name }}</i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
