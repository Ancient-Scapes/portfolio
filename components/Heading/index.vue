<template>
  <!-- <TextFrame
    :text="text"
    :icon="icon"/> -->
  <div class="heading">
    <h2 class="heading__h2">
      <Icon :name="icon"/> 
      {{ text }}
    </h2>
  </div>
</template>

<script>
import Icon from '~/components/Icon'

export default {
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
