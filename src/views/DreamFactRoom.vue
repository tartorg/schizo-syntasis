<template>
  <Room
    :items="items"
    :positions="mockedPosition"
    :room-size="[30, 10, 30]"
    background-video="dream-fact/BGVDO.mov"
  >
    <a-entity
      particle-system="preset: dust; velocityValue: 1 5 0; accelerationValue: 1 0 1; opacity: 0.8; particleCount: 1500; color: #911;"
    ></a-entity>
  </Room>
</template>

<script>
import Room from '../components/Room'
import { getRandomInt } from '../utils/randomGenerator'

export default {
  name: 'SelfEmptinessRoom',
  components: {
    Room,
  },
  data() {
    return {
      items: [
        'dream-fact/dreamfact1.glb',
        'dream-fact/dreamfact2.glb',
        'dream-fact/dreamfact3.glb',
        'dream-fact/dreamfact4.glb',
        'dream-fact/dreamfact5.glb',
      ],
    }
  },
  computed: {
    mockedPosition() {
      return this.items.map(() => {
        return Array(3)
          .fill(null)
          .map(() => getRandomInt(0, 100) / 100)
      })
    },
  },
}
</script>
