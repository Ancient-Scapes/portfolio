<template>
  <div class="skill--old">
    <!-- 表ヘッダ -->
    <div class="skill--old__header">
      <span class="skill--old__header__title">
        <marquee>{{ listTitle }}</marquee>
      </span>
    </div>

    <table
      v-for="(value, index) in data"
      :key="index"
      class="skill--old__list">
      <thead class="skill--old__list__head">
        <th class="skill--old__list__head__item">{{ value.name }}</th>
      </thead>
      <tbody class="skill--old__list__body">
        <td
          v-for="(techName, index2) in value.item"
          :key="index2"
          class="skill--old__list__body__item">{{ techName }}</td>
      </tbody>
    </table>
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
