<template>
  <div class="createVideo">
    <div class="left">
      <div class="left_top">视频配置</div>
      <div class="left_center">
        <div
          class="left_center_item"
          v-for="(item, index) in leftBar"
          key="index"
          :class="firstSet == index ? 'left_center_item_active' : ''"
          @click="chooseSet(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="left_bottom">
        <img src="@/static/pages/HomePage/createVideoButton.svg" alt="" />
      </div>
    </div>
    <el-carousel
      height="641px"
      class="swiper"
      indicator-position="none"
      arrow="never"
      :loop="false"
      :autoplay="false"
      ref="carousel"
    >
      <el-carousel-item name="0">
        <div class="center">
          <div class="center_top">
            <div class="center_top_item">
              <i class="iconfont icon-renlianshibie_o"></i> 生成AI人像
            </div>
            <div class="center_top_item">
              <i class="iconfont icon-24gl-fileEmpty"></i> 上传你的照片
            </div>
          </div>
          <div class="center_title">
            <div
              class="center_title_item"
              v-for="(item, index) in SystemCharacterData"
              key="index"
              @click="SystemCharacterFun(index)"
              :class="
                SystemCharacterIndex == index ? 'center_title_item_active' : ''
              "
            >
              {{ item }}
            </div>
          </div>
          <div class="center_content">
            <div
              class="center_content_item"
              v-for="(item, index) in modelData"
              key="inedx"
              @click="chooseModelFun(index)"
              :class="
                index == chooseModelIndex ? 'center_content_item_active' : ''
              "
            >
              <img src="../../static/pages/HomePage/model.svg" alt="" />
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item name="1">
        <div class="center1">
          <div class="top">
            <div class="title">
              <div
                class="title_item"
                v-for="(item, index) in fitData"
                key="index"
                :class="choosefitDataIndex == index ? 'title_item_active' : ''"
                @click="choosefitDataFun(index)"
              >
                {{ item }}
              </div>
              <!-- <div class="title_item">人声拟合</div> -->
            </div>
            <div class="content">
              <div class="content_top">
                <textarea
                  class="textarea"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value="生活就像海洋，只有意志坚强的人才能到达彼岸!"
                ></textarea>
                <i class="iconfont icon-24gl-volumeLow"></i>
                <i class="iconfont icon-quxiao"></i>
                <i class="iconfont time">00:06</i>
              </div>
              <div class="content_bottom">
                <div class="content_bottom_center">
                  <i class="iconfont icon-wenjianjia"></i>
                  <span>上传文本</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom_title">声音角色</div>
            <div class="bottom_content">
              <div class="bottom_content_itme">
                <span>语速</span>
                <div class="chooose">0.5</div>
              </div>
              <div class="bottom_content_itme">
                <span>语调</span>
                <div class="chooose">激昂</div>
              </div>
              <div class="bottom_content_itme">
                <span>系统声音 我的声音</span>
                <div class="chooose">lvy</div>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>

      <el-carousel-item name="2">
        <div class="center1">
          <div class="top2">
            <div class="title">
              <div
                class="title_item"
                v-for="(item, index) in dynamic"
                key="index"
                :class="choosefitDataIndex == index ? 'title_item_active' : ''"
                @click="choosefitDataFun(index)"
              >
                {{ item }}
              </div>
              <!-- <div class="title_item">人声拟合</div> -->
            </div>
            <div class="contents">
              <div
                class="content_item"
                v-for="(item, index) in Videos"
                key="index"
              >
                <videoPlay :sources="item.src" controlBar="false"></videoPlay>
                <span class="title">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="right">
      <div class="model_img">
        <img src="../../static/pages/HomePage/model.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance();
const leftBar = ref(["发言人物", "文/声拟合", "动作配置"]);
// 选择视频配置
const firstSet = ref(0);
const chooseSet = (e) => {
  firstSet.value = e;
  proxy.$refs.carousel.setActiveItem(e);
};
const SystemCharacterData = ref(["系统任务", "历史调用"]);
// 左边系统任务选择
const SystemCharacterIndex = ref(0);
const SystemCharacterFun = (e) => {
  SystemCharacterIndex.value = e;
};
// 动态的选择
const dynamic = ref(["系统动态", "我的动态"]);
const modelData = ref([
  "../../static/pages/HomePage/model.svg",
  "../../static/pages/HomePage/model.svg",
  "../../static/pages/HomePage/model.svg",
  "../../static/pages/HomePage/model.svg",
  "../../static/pages/HomePage/model.svg",
  "../../static/pages/HomePage/model.svg",
  "../../static/pages/HomePage/model.svg",
]);
// 动态视频获取
const Videos = ref([
  {
    src: "https://prod-streaming-video-msn-com.akamaized.net/a3ed4aeb-19cc-4dea-8c37-4e68d735bb43/dafa4eb0-f2e1-4c3c-84e9-d95eba8beb23.mp4",
    title: "拍手微笑",
  },
  {
    src: "https://prod-streaming-video-msn-com.akamaized.net/fb5e2f79-b18b-498a-98cf-d00352200957/50d763c7-96e6-492b-81ee-c692520504ef.mp4",
    title: "一起微笑",
  },

  {
    src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    title: "介绍产品",
  },
  {
    src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    title: "给你点赞",
  },
  {
    src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    title: "xxxxxx",
  },
]);
const chooseModelIndex = ref(0);
const chooseModelFun = (e) => {
  chooseModelIndex.value = e;
};
// 选择拟合
const fitData = ref(["文本拟合", "人声拟合"]);
const choosefitDataIndex = ref(0);
const choosefitDataFun = (e) => {
  console.log(e);
  choosefitDataIndex.value = e;
};
</script>

<style lang="scss" scoped>
.createVideo {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 2rem;
  overflow: hidden;
  .left {
    width: 9.875rem;
    height: 621px;
    background-color: #f3f3f3;
    padding: 4.5rem 0.625rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: var(--text-color);
    box-shadow: 0 0.25rem 0.25rem 0 rgba($color: #000000, $alpha: 0.25);
    border-radius: 1.875rem;
    .left_top {
      width: 8.5rem;
      height: 3.75rem;
      border-radius: 1.25rem;
      font-size: 1.125rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--black_secon_-bg);
    }
    .left_center {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      height: 20.625rem;
      justify-content: space-around;
      .left_center_item {
        width: 100%;
        height: 3.125rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.625rem;
        box-sizing: border-box;
      }
      .left_center_item_active {
        font-size: 1.25rem;
        color: var(--primary-color);
      }
    }
  }

  .swiper {
    width: 30rem;
    position: relative;
    top: 0.625rem;
    .el-carousel__item {
      padding-bottom: 1.25rem;
      box-sizing: border-box;
      width: 100%;

      .center {
        width: 26.25rem;
        height: 100%;
        border-radius: 1.875rem;
        box-shadow: 0 0.25rem 0.25rem 0 rgba($color: #000000, $alpha: 0.25);
        padding: 30px 1.5rem;
        box-sizing: border-box;
        background-color: var(--black_secon_-bg);
        margin-left: 2rem;
        .center_top {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
          .center_top_item {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 10.5rem;
            height: 4.375rem;
            justify-content: space-around;
            box-shadow: 0 0.25rem 0.25rem 0 rgba($color: #000000, $alpha: 0.25);
            border-radius: 0.9375rem;
            background-color: white;
            font-size: 0.875rem;
            cursor: pointer;
            .iconfont {
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.5625rem;
            }
          }
        }
        .center_title {
          width: 100%;
          display: flex;
          height: 2.5rem;
          margin-top: 1.875rem;

          .center_title_item {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            border-bottom: 0.0625rem solid var(--text-color);
            cursor: pointer;
          }
          .center_title_item_active {
            border-bottom: 0.1875rem solid var(--text-color);
          }
        }
        .center_content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 1.25rem;
          .center_content_item {
            height: 110px;
            box-sizing: border-box;
            overflow: hidden;
            border-radius: 70px/70px;
            margin-top: 10px;
            margin-bottom: 10px;
            box-shadow: 0 0.25rem 0.25rem 0 rgba($color: #000000, $alpha: 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: calc(100% / 3.5);
            min-width: calc(100% / 3.5);
            max-width: calc(100% / 3.5);
            img {
              width: 100%;
              height: 100%;
            }
          }
          .center_content_item_active {
            border: 0.1875rem solid var(--border-color);
          }
        }
      }
      .center1 {
        box-sizing: border-box;
        width: 26.25rem;
        height: 100%;
        border-radius: 1.875rem;
        box-sizing: border-box;
        margin-left: 2rem;
        border-radius: 1.875rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
          height: 320px;
          background-color: var(--black_secon_-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 1.875rem;
          overflow: hidden;
          box-shadow: 0 0.25rem 0.25rem 0 rgba($color: #000000, $alpha: 0.25);
          .title {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            .title_item {
              height: 100%;
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.25rem;
              cursor: pointer;
              background-color: white;
            }
            .title_item_active {
              background-color: #f3f3f3;
              color: var(--primary-color);
            }
          }
          .content {
            display: flex;
            flex-direction: column;
            .content_top {
              width: 24.1875rem;
              height: 130px;
              border-radius: 0.9375rem;
              overflow: hidden;
              margin-top: 1.25rem;
              position: relative;
              .textarea {
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                padding: 0.625rem;
                box-sizing: border-box;
                resize: none;
                color: var(--text-color);
              }
              .iconfont {
                cursor: pointer;
                position: absolute;
                z-index: 2;
                width: 25px;
                height: 25px;
                font-size: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0.625rem;
                box-shadow: 0 0.25rem 0.25rem 0
                  rgba($color: #000000, $alpha: 0.25);
              }
              .time {
                position: absolute;
                z-index: 2;
                width: 40px;
                height: 15px;
                right: 1.25rem;
                bottom: 1.25rem;
                background-color: #555555;
                color: white;
                font-size: 12px;
              }
              .icon-24gl-volumeLow {
                left: 1.25rem;
                bottom: 1.25rem;
              }
              .icon-quxiao {
                left: 3.75rem;
                bottom: 1.25rem;
              }
            }
            .content_bottom {
              width: 100%;
              height: 90px;
              border-radius: 0.9375rem;
              background-color: white;
              margin-top: 1.5625rem;
              display: flex;
              align-items: center;
              justify-content: center;
              .content_bottom_center {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
              }
            }
          }
        }
        .top2 {
          height: 100%;
          background-color: var(--black_secon_-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 1.875rem;
          overflow: hidden;
          box-shadow: 0 0.25rem 0.25rem 0 rgba($color: #000000, $alpha: 0.25);
          .title {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            .title_item {
              height: 100%;
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.25rem;
              cursor: pointer;
              background-color: white;
            }
            .title_item_active {
              background-color: #f3f3f3;
              color: var(--primary-color);
            }
          }
          .contents {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            padding-top: 10px;
            .content_item {
              margin-top: 30px;
              height: 150px;
              width: 150px;
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 0 0 4px 4px rgba($color: #000000, $alpha: 0.25);
              margin-left: 40px;
              position: relative;
              .title {
                width: 100%;
                position: absolute;
                z-index: 99;
                bottom: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 12px;
              }
              :deep(.video-overlay) {
                display: none;
              }
              :deep(.vjs-big-play-button) {
                position: absolute;
                left: 50px;
                top: 20px;
                width: 0;
                height: 0;
                .vjs-control-text {
                  background-color: red;
                }
              }
              :deep(.vjs-control-bar) {
                width: 100%;
              }
            }
          }
        }
        .bottom {
          width: 100%;
          height: 17.5rem;
          border-radius: 1.875rem;
          background-color: var(--black_secon_-bg);
          display: flex;
          flex-direction: column;
          .bottom_title {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.25rem;
            height: 3.75rem;
          }
          .bottom_content {
            width: 100%;
            padding: 0.625rem 1.25rem;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            font-size: 0.875rem;
            .bottom_content_itme {
              margin-bottom: 0.625rem;
              .chooose {
                width: 100%;
                height: 2.5rem;
                display: flex;
                align-items: center;
                background-color: white;
                border-radius: 1.25rem;
                padding-left: 0.9375rem;
                box-sizing: border-box;
                margin-top: 0.3125rem;
              }
            }
          }
        }
      }
    }
  }
  .right {
    height: 100%;
    height: 621px;
    width: 41.0625rem;
    border-radius: 1.875rem;
    box-shadow: 0 0 0.25rem 0 rgba($color: #000000, $alpha: 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    .model_img {
      width: 25rem;
      height: 18.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #dddfde;
      border-radius: 0.9375rem;
    }
  }
}
</style>
