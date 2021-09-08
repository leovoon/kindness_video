<template>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="Hola 👋"
    content="Here you go, only positive vibes video"
    positive-text="Got it"
    @positive-click="submitCallback"
    
  />
  <TikTokStream />
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import TikTokStream from './components/TikTokStream.vue'
import { NModal } from 'naive-ui'

export default defineComponent({
  name: 'App',
  components: {
    TikTokStream,
    NModal,
  },

  setup() {

    const showModal = ref(false)

    onMounted(()=> showModal.value = true)

    return {
      showModal,
      
      submitCallback() {
        showModal.value = false
      },
    }
  },
})
</script>

<style></style>
