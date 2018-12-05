<template>
  <div class="modechange">
    <div
      v-if="$store.getters.isOld"
      class="modechange__wrapper modechange__wrapper__old">
      <button 
        class="modechange__old__button"
        @click="$store.commit('changeMode')">
        <div class="modechange__old__button__text">
          {{ oldButtonText }}
        </div>
      </button>
    </div>
    <div
      v-else-if="$store.getters.isFuture"
      class="modechange__wrapper modechange__wrapper__future">
      <vs-button 
        icon="build"
        @click="$store.commit('changeMode')">
        {{ $store.getters.getMode }}
      </vs-button>
    </div>

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
