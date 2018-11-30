<template>
  <div class="modechange">
    <div
      v-if="$store.getters.isOld"
      class="modechange__old">
      <button 
        class="modechange__old__button"
        @click="$store.commit('changeMode')">
        <div class="modechange__old__button__text">
          {{ oldButtonText }}
        </div>
      </button>
    </div>
    <vs-chip 
      v-else-if="$store.getters.isFuture"
      class="modechange__future">
      <vs-avatar
        icon="thumb_up"
        @click="$store.commit('changeMode')"/>
      {{ $store.getters.getMode }}
    </vs-chip>
  </div>
</template>

<script>
export default {
  computed: {
    oldButtonText() {
      return `☆${this.$store.getters.getMode}☆`
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
