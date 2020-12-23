<template>
  <Room
    :items="items"
    :positions="mockedPosition"
    :room-size="[30, 10, 30]"
    background-video="self-emptiness/IMG_1915.MOV"
  >
    <video
      id="self-emptiness/IMG_1915.MOV"
      autoplay
      loop
      subtitles="floorVideo"
      description="floor video"
      :src="videoPath"
    ></video>
  </Room>
</template>

<script>
import Room from '../components/Room'
import { getRandomInt } from '../utils/randomGenerator'
import { publicPath } from '../../vue.config'

export default {
  name: 'SelfEmptinessRoom',
  components: {
    Room,
  },
  data() {
    return {
      items: [
        'self-emptiness/emptiness1.glb',
        'self-emptiness/emptiness2.glb',
        'self-emptiness/emptiness3.glb',
        'self-emptiness/emptiness4.glb',
        'self-emptiness/emptiness5.glb',
        'self-emptiness/emptiness6.glb',
      ],
    }
  },
  computed: {
    mockedPosition() {
      return this.items.map(() => {
        return Array(3)
          .fill(null)
          .map(() => getRandomInt(0, 1))
      })
    },
    videoPath() {
      return `${publicPath}/assets/self-emptiness/IMG_1915.MOV`
    },
  },
}
</script>
