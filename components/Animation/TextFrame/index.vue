<template>
  <div class="text--frame">
    <h2>
      <span
        v-observe-visibility="visibilityChanged" 
        class="text--frame__bg">
        <span>{{ text }}</span>
      </span>
    </h2>
  </div>
</template>

<script>
export default {
  props: {
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
