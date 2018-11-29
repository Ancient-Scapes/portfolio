<template>
  <div class="skill">

    <!-- 表ヘッダ -->
    <div class="skill--header">
      <span class="skill--header__icon">
        アイコン
      </span>
      <span class="skill--header__title">
        <TextFrame :text="listTitle"/>
      </span>
    </div>
    <ul class="skill--list">
      <li 
        v-for="(value, index) in data"
        :key="index"
        class="skill--list__item">
        <vs-card>
          <div 
            slot="header"
            class="card--header">
            <span class="card--header__icon">
              <CommonImage 
                v-if="!value.icon"
                :src="`/img/profile/${imgDirName}/${value.name}.png`"
                :is-icon="true"/>
            </span>
            <span class="card--header__title">
              <h3>{{ value.name }}</h3>
            </span>
          </div>
          <div v-if="value.item">
            <ImageList 
              :src="getSrc(value.item, imgDirName)"
              :description="value.item"/>
          </div>
        </vs-card>
        <!-- <div class="skill--list__item__main">
          <CommonImage :src="`/img/profile/${imgDirName}/${value.name}.png`"/>
          <span class="skill--list__item__main__text">{{ value.name }}</span>
        </div>
        <div class="skill--list__item__sub">
          <ImageList :src="getSrc(value.item, imgDirName)"/>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
import CommonImage from '~/components/Image/index.vue'
import ImageList from '~/components/ImageList/index.vue'
import TextFrame from '~/components/Animation/TextFrame'

export default {
  components: {
    CommonImage,
    ImageList,
    TextFrame
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
    imgDirName: {
      type: String,
      default: null
    }
  },
  methods: {
    getSrc(arr, imgDirName) {
      return Array.prototype.map.call(Object(arr), value => {
        return `/img/profile/${imgDirName}/${value}.png`
      })
    }
  }
}
</script>

<style lang="scss" src="~/components/List/Skill/style.scss"/>
