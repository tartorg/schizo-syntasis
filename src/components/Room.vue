<template>
  <a-scene>
    <a-assets>
      <video
        :id="backgroundVideo"
        autoplay
        loop
        subtitles="backgroundVideo"
        description="background video"
        :src="videoPath"
      ></video>
    </a-assets>

    <a-entity
      v-for="(itemPath, index) in itemsPath"
      :key="itemPath"
      :gltf-model="itemPath"
      :position="itemsPosition[index]"
    ></a-entity>

    <slot></slot>

    <a-videosphere :src="`#${backgroundVideo}`"></a-videosphere>
  </a-scene>
</template>

<script>
import { publicPath } from '../../vue.config'

export default {
  name: 'Room',
  props: ['items', 'positions', 'roomSize', 'backgroundVideo'],
  computed: {
    itemsPosition() {
      const minCoord = this.roomSize.map((axis) => -axis / 2)

      return this.positions.map((obj) =>
        obj
          .map((pos, axis) => pos * this.roomSize[axis] + minCoord[axis])
          .join(' ')
      )
    },
    itemsPath() {
      return this.items.map((item) => {
        if (item.path) {
          return `url(${publicPath}/assets/${item.path})`
        } else {
          return `url(${publicPath}/assets/${item})`
        }
      })
    },
    videoPath() {
      return `${publicPath}/assets/${this.backgroundVideo}`
    },
  },
}
</script>
