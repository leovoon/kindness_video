<template>
  <div class="video">

    <video :src="video" ref="vidRef" @click="togglePlay" />
   
    <svg
      
      viewBox="0 0 512 512"
      @click="togglePlay"
      v-show="!state.playing"
    >
      <path d="M152.443 136.417l207.114 119.573-207.114 119.593z" fill="#fff" />
    </svg>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  name: "video",
  props: {
    video: String,
    
  },
  setup() {
    const vidRef = ref(null);

    const state = reactive({
      playing: false,
    });

    const play = () => {
      if(vidRef.value.paused)
        vidRef.value.play();
      vidRef.value.play();
      state.playing = true;
    };

    const pause = () => {
      vidRef.value.pause();
      state.playing = false;
    };

    const togglePlay = () => {
      if (state.playing) {
        pause();
      } else {
        play();
      }
    };

    return {
      vidRef,
      play,
      pause,
      togglePlay,
      state,
    };
  },
});
</script>

<style scoped>
.video {
  position: relative;
  width: 100%;
  height: 100%;
}

video {
  aspect-ratio: 9 / 16;
  width: 100%;
  height: auto;
  position: relative;
}

svg, .loading  {
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 35px);
  width: 90px;
  height: 90px;
  z-index: 10;
}
</style>
