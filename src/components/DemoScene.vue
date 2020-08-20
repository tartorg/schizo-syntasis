<template>
  <Room
    :items="room1.items"
    :positions="mockedPosition"
    :room-size="[20, 20, 20]"
  />
</template>

<script>
import Room from './Room'

export default {
  name: 'DemoScene',
  components: {
    Room,
  },
  data() {
    return {
      room1: {
        items: [
          'room1/unreal1.glb',
          'room1/unreal2.glb',
          'room1/unreal3.glb',
          'room1/unreal4.glb',
          'room1/unreal5.glb',
          'room1/unreal6.glb',
          'room1/unreal7.glb',
          'room1/unreal8.glb',
          'room1/unreal9.glb',
        ],
      },
    }
  },
  computed: {
    mockedPosition() {
      return this.room1.items.map(() => Array(3).fill(null).map(Math.random))
    },
  },
}
</script>
