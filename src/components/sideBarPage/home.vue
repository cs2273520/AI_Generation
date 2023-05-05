<template>
  <div class="home_main">
    <div class="search">
      <div class="search_input">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索视频" />
      </div>
    </div>
    <div class="videos">
      <div class="videos_item" v-for="(item, index) in Videos" key="index">
        <div class="video_item_video">
          <videoPlay :sources="item.src" :thumbnailTime="30"></videoPlay>
        </div>

        <div class="video_info">
          <span>{{ item.title }}</span>
          <span>{{ item.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import videoPlay from "./videoPlay.vue";
const Videos = ref([
  {
    src: "https://prod-streaming-video-msn-com.akamaized.net/a3ed4aeb-19cc-4dea-8c37-4e68d735bb43/dafa4eb0-f2e1-4c3c-84e9-d95eba8beb23.mp4",
    title: "xxxxxx",
    time: "2023/3/3",
  },
  {
    src: "https://prod-streaming-video-msn-com.akamaized.net/fb5e2f79-b18b-498a-98cf-d00352200957/50d763c7-96e6-492b-81ee-c692520504ef.mp4",
    title: "xxxxxx",
    time: "2023/3/3",
  },

  {
    src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    title: "xxxxxx",
    time: "2023/3/3",
  },
  {
    src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    title: "xxxxxx",
    time: "2023/3/3",
  },
  {
    src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    title: "xxxxxx",
    time: "2023/3/3",
  },
]);
</script>

<style lang="scss" scoped>
.home_main {
  width: 100%;
  height: 100%;
  padding: 72px 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .search {
    .search_input {
      width: 204px;
      height: 48px;
      border-radius: 4px;
      border: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      padding-left: 15px;
      input {
        width: 100%;
        border: none;
        outline: none;
        font-size: 18px;
        margin-left: 10px;
      }
    }
  }
  .videos {
    margin-top: 25px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .videos_item {
      width: calc(100% / 4.2);
      max-width: calc(100% / 4.2);
      min-width: calc(100% / 4.2);
      margin-right: 25px;
      height: 210px;
      border: 1px solid var(--border-color);
      border-radius: 10px;
      margin-bottom: 25px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      //   &:nth-child(4n) {
      //     // 去除第3n个的margin-right
      //     margin-right: 0;
      //   }
      .video_item_video {
        flex: 1;
        overflow: hidden;
      }
      .video_info {
        height: 42px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        font-size: 12px;
        color: var(--text-color);
        border-top: 1px solid var(--border-color);
      }
    }
  }
}
</style>
