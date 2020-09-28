<template>
  <Room
    :items="items"
    :positions="mockedPosition"
    :room-size="[50, 50, 50]"
    background-video="room1/IMG_1915.MOV"
  />
</template>

<script>
import Room from '../components/Room'

export default {
  name: 'UnrealSelfRoom',
  components: {
    Room,
  },
  data() {
    return {
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
    }
  },
  computed: {
    mockedPosition() {
      return this.items.map(() => Array(3).fill(null).map(Math.random))
    },
  },
}
</script>
