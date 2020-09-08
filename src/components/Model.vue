<template>
  <a-entity
    :gltf-model="`url(${modelPath})`"
    :position="position.join(' ')"
  ></a-entity>
</template>

<script>
import { publicPath } from '../../vue.config'

export default {
  name: 'Model',
  props: ['path', 'position'],
  data() {
    return {
      modelPath: `${publicPath}/models/${this.path}`,
    }
  },
}
</script>
