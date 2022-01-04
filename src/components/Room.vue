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
      <p class="questionsText">{{ question }}</p>
      <input class="bigInput" />
    </div>
  </div>
</template>

<style scoped>
.outerInterface {
  width: 100%;
  height: 100%;
}

.bigInput {
  width: 90%;
  height: 20px;
  font-size: 20px;
  padding: 20px;
  margin: 30px;
  margin-bottom: 10px;
  background: transparent;
  color: white;
  border: 1px solid white;
  position: fixed;
  bottom: 0px;
}
.bigInput:focus {
  outline-width: 0;
}

.questionsText {
  width: 50%;
  color: white;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 30px;
  height: 50px;
  position: fixed;
  cursor: grab;
  user-select: none;
}
</style>

<script>
import { publicPath } from '../../vue.config'
import questionsText from '!raw-loader!../questions/list.txt'

export default {
  name: 'Room',
  props: ['items', 'positions', 'roomSize', 'backgroundVideo'],
  data: function () {
    return {
      question: '',
    }
  },
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
  },
  created: function () {
    this.updateQuestions()
  },
  methods: {
    updateQuestions() {
      const questionLists = questionsText.split('\n')
      setInterval(() => {
        const question = questionLists.pop()
        this.question = question
      }, 1000)
    },
  },
}
</script>
