<template>
  <div class="skill">
    <!-- 表ヘッダ -->
    <div class="skill--header">
      <span class="skill--header__title">
        <Headding
          :text="listTitle"
          icon="build"/>
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
                :src="`/img/profile/${imgDirName}/${getContentsName(value.name)}.png`"
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
      </li>
    </ul>
  </div>
</template>

<script>
import CommonImage from '~/components/Image'
import ImageList from '~/components/ImageList'
import Headding from '~/components/Heading'

export default {
  components: {
    CommonImage,
    ImageList,
    Headding
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
      return Array.prototype.map.call(
        Object(arr),
        function(value) {
          const filename = this.getContentsName(value)
          return `/img/profile/${imgDirName}/${filename}.png`
        }.bind(this)
      )
    },
    // #と.がファイル名に含まれているのでファイルパスを変えて取得(そのままだと取れなかった)
    getContentsName(originName) {
      let contentsName

      switch (originName) {
        case 'C#':
          contentsName = 'C Sharp'
          break
        case '.NET':
          contentsName = 'dotNET'
          break
        default:
          contentsName = originName
          break
      }
      return contentsName
    }
  }
}
</script>

<style lang="scss" src="./style.scss"/>
