<template>
  <div class="skill--old">
    <!-- 表ヘッダ -->
    <div class="skill--old--header">
      <span class="skill--old--header__title">
        {{ listTitle }}
      </span>
    </div>
    <ul class="skill--old--list">
      <li 
        v-for="(value, index) in data"
        :key="index"
        class="skill--old--list__item">
        <div class="skill--old--list__item--header">
          <span class="skill--old--list__item__title">
            <h3>{{ value.name }}</h3>
          </span>
        </div>
        <div v-if="value.item">
          <ul class="skill--old--list__item--list">
            <li
              v-for="(value2, index2) in value.item"
              :key="index2"
              class="skill--old--list__item--list__item">
              {{ value2 }}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CommonImage from '~/components/Image'
import ImageList from '~/components/ImageList'

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
