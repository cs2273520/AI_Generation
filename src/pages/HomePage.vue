<template>
  <div class="main">
    <div class="sideBar">
      <div class="sideBar_top">
        <div class="img">
          <img src="@/static/pages/login/logo.svg" alt="" />
        </div>

        <div class="choosePage" v-for="(item, index) in sideBar" :key="index">
          <div
            class="choosePage_item"
            @click="changeSideBar(index)"
            :class="chooseSideBar == index ? 'sideBar_active' : ''"
          >
            <i class="iconfont" :class="item"></i>
          </div>
        </div>
      </div>
      <div class="sideBar_bottom">
        <div class="sideBar_bottom_item">
          <i class="iconfont icon-touxiang3"></i>
        </div>
        <div class="sideBar_bottom_item">
          <i class="iconfont icon-bangzhu"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <home v-if="chooseSideBar == 0"></home>
      <createVideo v-if="chooseSideBar == 1"></createVideo>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import home from "@/components/sideBarPage/home.vue";
import createVideo from "@/components/sideBarPage/createVideo.vue";
// 侧边栏元素
const sideBar = ref(["icon-zhuye1", "icon-shipin1", "icon-a-5Jyinboyinpin"]);
// 当前侧边栏选中元素
const chooseSideBar = ref(1);
// 改变当前侧边栏选中元素
const changeSideBar = (e) => {
  chooseSideBar.value = e;
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  .sideBar {
    width: 64px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 10px 0 rgba($color: #000000, $alpha: 0.3);
    .sideBar_top {
      display: flex;
      flex-direction: column;
      width: 100%;
      .img {
        width: 100%;
        height: 35px;
        box-sizing: border-box;
        text-align: center;
        padding: 5px;
        margin: 20px 0;
        img {
          width: 100%;
        }
      }
      .choosePage {
        display: flex;
        flex-direction: column;
        align-items: center;
        .choosePage_item {
          width: 100%;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          .iconfont {
            font-size: 24px;
          }
        }
        .choosePage_item:hover {
          cursor: pointer;
          background-color: #f3f3f3;
        }
      }
    }
    .sideBar_active {
      background-color: #f3f3f3;
    }
    .sideBar_bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;
      .sideBar_bottom_item {
        width: 100%;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon-touxiang3 {
          font-size: 30px;
          margin-bottom: 15px;
        }
        .icon-bangzhu {
          font-size: 24px;
        }
      }
    }
  }
  .content {
    flex: 1;
  }
}
</style>
