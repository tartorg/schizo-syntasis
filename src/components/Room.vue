<template>
  <a-scene>
    <a-assets>
      <video :id="backgroundVideo" autoplay loop :src="videoPath"></video>
    </a-assets>

    <a-entity
      v-for="(itemPath, index) in itemsPath"
      :key="itemPath"
      :gltf-model="itemPath"
      :position="itemsPosition[index]"
    ></a-entity>

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
      const [x, y, z] = this.roomSize
      const minCoord = [-x / 2, -y / 2, -z / 2]

      return this.positions.map((obj) =>
        obj
          .map((pos, axis) => pos * this.roomSize[axis] + minCoord[axis])
          .join(' ')
      )
    },
    itemsPath() {
      return this.items.map((item) => `url(${publicPath}/assets/${item})`)
    },
    videoPath() {
      return `${publicPath}/assets/${this.backgroundVideo}`
    },
  },
}
</script>
