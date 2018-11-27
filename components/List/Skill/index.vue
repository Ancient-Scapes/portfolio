<template>
  <div class="skill">
    <vs-list class="skill__list">
      <vs-list-header 
        :icon="listIcon" 
        :title="listTitle"/>
      <vs-list-item
        v-for="(value, index) in data"
        :key="index"
        :title="value.name"
        class="skill__list__item">
        <!-- 言語アイコン -->
        <template 
          slot="avatar">
          <CommonImage :src="`/img/profile/${mainImgDirName}/${value.name}.png`"/>
        </template>

        <div
          class="skill__list__item__sub">
          <ImageList :src="getSrc(value.item, subImgDirName)"/>
        </div>
      </vs-list-item>
    </vs-list>
  </div>
</template>

<script>
import CommonImage from '~/components/Image/index.vue'
import ImageList from '~/components/ImageList/index.vue'

export default {
  components: {
    CommonImage,
    ImageList
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    listTitle: {
      type: String,
      required: true
    },
    listIcon: {
      type: String,
      required: true
    },
    mainImgDirName: {
      type: String,
      required: true
    },
    subImgDirName: {
      type: String,
      required: true
    }
  },
  methods: {
    getSrc(arr, subImgDirName) {
      return Array.prototype.map.call(Object(arr), value => {
        return `/img/profile/${subImgDirName}/${value}.png`
      })
    }
  }
}
</script>

<style lang="scss" src="~/components/List/Skill/style.scss"/>
