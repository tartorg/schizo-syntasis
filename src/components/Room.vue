<template>
  <a-scene>
    <Model
      v-for="(itemPath, index) in items"
      :key="itemPath"
      :path="itemPath"
      :position="mappedPosition[index]"
    />
    <a-sky color="#000" />
  </a-scene>
</template>

<script>
import Model from './Model'

export default {
  name: 'Room',
  props: ['items', 'positions', 'roomSize'],
  components: {
    Model,
  },
  computed: {
    mappedPosition() {
      const [x, y] = this.roomSize
      const minCoord = [-x / 2, -y / 2, 0]

      return this.positions.map((obj) =>
        obj.map((pos, axis) => pos * this.roomSize[axis] + minCoord[axis])
      )
    },
  },
}
</script>
