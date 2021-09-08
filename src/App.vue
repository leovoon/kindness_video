<template>
  <it-alert
    class="alert"
    iconbox
    type="primary"
    :title="alertTitle"
    :body="alertBody"
    closable="true"
  />
  <TikTokStream />
</template>

<script>
import { ref } from 'vue'
import TikTokStream from './components/TikTokStream.vue'

export default {
  name: 'App',
  components: {
    TikTokStream,
  },
  setup() {
    const alertTitle = ref('Hola 👋')
    const alertBody = ref(
      'addicted to TikTok? Here you go, only positive vibes.    /leo',
    )
    return {
      alertTitle,
      alertBody,
    }
  },
}
</script>

<style>
.alert {
  position: absolute;
  z-index: 20;
  max-width: 80vw;
  margin: 1rem;
}


</style>
