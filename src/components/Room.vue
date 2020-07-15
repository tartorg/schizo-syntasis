<template>
  <a-scene v-if="modelPath">
    <a-entity :gltf-model="`url(${modelPath})`"></a-entity>
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
    }
  },
}
</script>
