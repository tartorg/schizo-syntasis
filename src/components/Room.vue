<template>
  <div>
    <a-scene>
      <a-assets>
        <video
          :id="backgroundVideo"
          autoplay
          loop
          subtitles="backgroundVideo"
          description="background video"
          :src="videoPath"
        ></video>
      </a-assets>

      <a-entity
        v-for="(itemPath, index) in itemsPath"
        :key="itemPath"
        :gltf-model="itemPath"
        :position="itemsPosition[index]"
      ></a-entity>

      <slot></slot>

      <a-videosphere :src="`#${backgroundVideo}`"></a-videosphere>
    </a-scene>
    <div class="outerInterface">
      <input class="bigInput" />
      <p class="questionsText">{{ questionsText }}</p>
    </div>
  </div>
</template>

<style scoped>
.outerInterface {
  position: absolute;
  width: 100%;
  height: 0%;
  display: flex;
  bottom: 0;
}

.bigInput {
  width: 100%;
  height: 20px;
  font-size: 20px;
  padding: 20px;
  margin: 30px;
  margin-bottom: 10px;
  align-self: flex-end;
  background: transparent;
  color: white;
  border: 1px solid white;
}
.bigInput:focus {
  outline-width: 0;
}

.questionsText {
  align-self: flex-start;
  width: 100%;
  color: white;
}
</style>

<script>
import { publicPath } from '../../vue.config'
import questionsText from '!raw-loader!../questions/list.txt'

export default {
  name: 'Room',
  props: ['items', 'positions', 'roomSize', 'backgroundVideo'],
  computed: {
    itemsPosition() {
      const minCoord = this.roomSize.map((axis) => -axis / 2)

      return this.positions.map((obj) =>
        obj
          .map((pos, axis) => pos * this.roomSize[axis] + minCoord[axis])
          .join(' ')
      )
    },
    itemsPath() {
      return this.items.map((item) => {
        if (item.path) {
          return `url(${publicPath}/assets/${item.path})`
        } else {
          return `url(${publicPath}/assets/${item})`
        }
      })
    },
    videoPath() {
      return `${publicPath}/assets/${this.backgroundVideo}`
    },
    questions() {
      return questionsText
    },
  },
}
</script>
