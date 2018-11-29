<template>
  <div class="icon">
    <i class="material-icons">{{ name }}</i>
  </div>
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
