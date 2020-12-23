<template>
  <Room
    :items="items"
    :positions="mockedPosition"
    :room-size="[30, 10, 30]"
    background-video="self-emptiness/IMG_1915.MOV"
  >
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
        'other-negative/otherneg1.glb',
        'other-negative/otherneg2.glb',
        'other-negative/otherneg3.glb',
        'other-negative/otherneg4.glb',
        'other-negative/otherneg5.glb',
        'other-negative/otherneg6.glb',
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
