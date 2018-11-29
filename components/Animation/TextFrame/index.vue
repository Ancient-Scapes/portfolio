<template>
  <div class="text--frame">
    <h2>
      <span
        v-observe-visibility="visibilityChanged" 
        class="text--frame__bg">
        <i
          v-if="icon" 
          class="material-icons">{{ icon }}</i>
        <span>{{ text }}</span>
      </span>
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
    icon: {
      type: String,
      default: null
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      if (entry.target.classList.length === 2 || !isVisible) {
        return
      }
      entry.target.classList.add('text--frame__bg__active')
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
