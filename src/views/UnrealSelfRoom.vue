<template>
  <Room
    :items="items"
    :positions="mockedPosition"
    :room-size="[30, 10, 30]"
    background-video="unreal-self/bg-video-small.mp4"
  >
    <a-entity
      particle-system="preset: rain; velocityValue: 0 -25 0; accelerationValue: 0 0 0; opacity: 0.6;"
    ></a-entity>
    <a-plane
      rotation="-90 0 0"
      width="1000"
      height="1000"
      color="#fff"
      metalness="1"
      roughness="1"
    ></a-plane>
  </Room>
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
        'unreal-self/unreal1(edit).glb',
        'unreal-self/unreal2(newresized).glb',
        // 'unreal-self/unreal3(edit).glb',
        'unreal-self/unreal4.glb',
        'unreal-self/unreal5.glb',
        'unreal-self/unreal6.glb',
        'unreal-self/unreal7.glb',
        'unreal-self/unreal8.glb',
        'unreal-self/unreal9.glb',
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
