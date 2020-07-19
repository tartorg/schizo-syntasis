<template>
  <a-scene v-if="modelPath">
    <a-assets @loaded="onModelLoaded">
      <a-asset-item :id="model" :src="modelPath"></a-asset-item>
    </a-assets>

    <a-entity v-if="isModelLoaded" :gltf-model="`#${model}`"></a-entity>
  </a-scene>
</template>

<script>
import { publicPath } from '../../vue.config'

export default {
  name: 'Room',
  props: ['model'],
  data() {
    return {
      modelPath: `${publicPath}/models/${this.model}`,
      isModelLoaded: false,
    }
  },
  methods: {
    onModelLoaded() {
      this.isModelLoaded = true
    },
  },
}
</script>
