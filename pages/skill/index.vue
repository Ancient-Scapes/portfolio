<template>
  <section class="skill">
    <div v-if="$store.getters.isOld">
      <Old/>
    </div>
    <div v-else-if="$store.getters.isFuture">
      <Future/>
    </div>
  </section>
</template>

<script>
import Old from '~/components/Pages/Skill/Old'
import Future from '~/components/Pages/Skill/Future'

export default {
  components: {
    Old,
    Future
  }
}
</script>

<style lang="scss" src="./style.scss"/>
