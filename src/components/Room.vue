<template>
  <a-scene>
    <Model
      v-for="(itemPath, index) in items"
      :key="itemPath"
      :path="itemPath"
      :position="positions[index]"
    />
    <a-sky color="#000" />
  </a-scene>
</template>

<script>
import Model from './Model'

export default {
  name: 'Room',
  props: ['items', 'positions'],
  components: {
    Model,
  },
}
</script>
