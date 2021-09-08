<template>
 <n-alert title="In progress" type="info" closable>
    tired of tiktok? Here you go, only positive vibes video
  </n-alert>
  <TikTokStream />
</template>

<script>
import { defineComponent ,ref } from 'vue'
import TikTokStream from './components/TikTokStream.vue'
import { NAlert } from 'naive-ui'

export default defineComponent({
  name: 'App',
  components: {
    TikTokStream,
    NAlert
  },
  setup() {
    const show = ref(true)
    return {
      show
    }
  },
})
</script>

<style>



</style>
