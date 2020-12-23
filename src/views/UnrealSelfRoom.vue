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
      color="#000"
      metalness="1"
      roughness="1"
    ></a-plane>
  </Room>
</template>

<script>
import Room from '../components/Room'
import { getRandomInt } from '../utils/randomGenerator'

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
        { path: 'unreal-self/unreal3(edit).glb', base: 0.3 },
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
      return this.items.map((item) => {
        if (item.base) {
          return Array(3)
            .fill(null)
            .map((_, index) => {
              if (index === 1) {
                return getRandomInt(item.base, 1)
              }
              return getRandomInt(0, 1)
            })
        }
        return Array(3)
          .fill(null)
          .map((_, index) =>
            index === 1 ? getRandomInt(0, 0.3) : getRandomInt(0, 1)
          )
      })
    },
  },
}
</script>
