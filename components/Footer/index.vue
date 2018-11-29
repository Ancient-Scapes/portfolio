<template>
  <section class="footer">
    <div class="footer__copyright">
      <span class="footer__copyright__text">
        ©SugarShootingStar
      </span>
    </div>

    <div class="footer__mode">
      <vs-chip>
        <vs-avatar
          icon="thumb_up"
          @click="$store.commit('changeMode')"/>
        {{ $store.getters.getMode }}
      </vs-chip>
    </div>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" src="./style.scss"/>
