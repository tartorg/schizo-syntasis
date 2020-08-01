<template>
  <a-scene v-if="modelPath">
    <a-assets @loaded="onModelLoaded">
      <a-asset-item :id="path" :src="modelPath"></a-asset-item>
    </a-assets>

    <a-entity
      v-if="isModelLoaded"
      :gltf-model="`#${path}`"
      :position="position.join(' ')"
    ></a-entity>
  </a-scene>
</template>

<script>
import { publicPath } from '../../vue.config'

export default {
  name: 'Model',
  props: ['path', 'position'],
  data() {
    return {
      modelPath: `${publicPath}/models/${this.path}`,
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
