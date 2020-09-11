<template>
  <a-scene>
    <a-entity
      v-for="(itemPath, index) in itemsPath"
      :key="itemPath"
      :gltf-model="`url(${itemPath})`"
      :position="itemsPosition[index]"
    ></a-entity>

    <a-sky color="#000" />
  </a-scene>
</template>

<script>
import { publicPath } from '../../vue.config'

export default {
  name: 'Room',
  props: ['items', 'positions', 'roomSize'],
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
      return this.items.map((item) => `${publicPath}/models/${item}`)
    },
  },
}
</script>
