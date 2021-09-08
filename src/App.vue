<template>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    positive-text="Got it"
    @positive-click="submitCallback"
  >
   <template #header>
      <div>Hola 👋</div>
    </template>
    <div>Here you go, only positive vibes video.<br> <a href='https://github.com/leovoon/kindness_video/blob/master/src/videos.json'>Add video here</a></div>

  </n-modal>
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
