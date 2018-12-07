<template>
  <div>
    <!-- 古代版 -->
    <div
      v-if="$store.getters.isOld"
      class="modechange--old">
      <button 
        class="modechange--old__button"
        @click="$store.commit('changeMode')">
        <div class="modechange--old__button__text">
          {{ oldButtonText }}
        </div>
      </button>
    </div>
    <!-- 現代版 -->
    <vs-button
      v-else-if="$store.getters.isFuture"
      icon="build"
      color="success"
      class="modechange--future"
      @click="$store.commit('changeMode')">
      {{ $store.getters.getMode }}
    </vs-button>
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
