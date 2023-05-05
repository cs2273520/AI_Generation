<template>
  <div class="video-container">
    <video ref="player" class="video-js" style="object-fit: fill"></video>
    <div class="video-overlay" v-if="!isPlaying">{{ formattedDuration }}</div>
  </div>
</template>

<script setup>
import videojs from "video.js";
import "video.js/dist/video-js.css";

import { defineProps, ref, onMounted, watch, toRef, computed } from "vue";

const props = defineProps({
  sources: {
    type: String,
    required: true,
  },
  thumbnailTime: {
    type: Number,
    default: 0,
  },
});

const player = ref(null);
const videoWidth = ref(0);
const videoHeight = ref(0);

const duration = ref(null);

const formattedDuration = computed(() => {
  if (duration.value === null) {
    return "";
  }

  const totalSeconds = Math.round(duration.value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
});

onMounted(() => {
  player.value = videojs(player.value, {
    autoplay: false,
    controls: true,
    sources: props.sources,
  });

  player.value.on("play", () => {
    isPlaying.value = true;
  });

  player.value.on("pause", () => {
    isPlaying.value = false;
  });

  player.value.on("ended", () => {
    isPlaying.value = false;
  });
  player.value.on("loadedmetadata", () => {
    duration.value = player.value.duration();
  });
});

watch(
  () => props.sources,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      player.value.src(newValue);
      player.value.load();
    }
  }
);

const isPlaying = ref(false);

const togglePlay = () => {
  if (player.value.paused()) {
    player.value.play();
  } else {
    player.value.pause();
  }
};
</script>

<style scoped>
.video-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.video-js {
  width: 100%;
  height: 100%;
}

.video-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  width: 50px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-bg);
  border-radius: 5px;
  padding: 0 3px;
}
</style>
