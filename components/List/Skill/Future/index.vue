<template>
  <div class="skill--future">
    <!-- 表ヘッダ -->
    <div class="skill--future__header">
      <span class="skill--future__header__title">
        <Heading
          :text="listTitle"
          icon="build"/>
      </span>
    </div>
    <ul class="skill--future__list">
      <li 
        v-for="(value, index) in data"
        :key="index"
        class="skill--future__list__item">
        <vs-card>
          <div 
            slot="header"
            class="card__header">
            <span class="card__header__icon">
              <CommonImage 
                v-if="!value.icon"
                :src="`/img/skill/${imgDirName}/${getContentsName(value.name)}.png`"
                :is-icon="true"/>
            </span>
            <span class="card__header__title">
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
import Heading from '~/components/Heading'

export default {
  components: {
    CommonImage,
    ImageList,
    Heading
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
          return `/img/skill/${imgDirName}/${filename}.png`
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
