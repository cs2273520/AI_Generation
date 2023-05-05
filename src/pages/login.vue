<template>
  <!-- 其它提示 -->
  <el-dialog
    center
    v-model="dialogVisible"
    :title="PopUpPrompt.title"
    width="30%"
  >
    <span class="PopUpPrompt">{{ PopUpPrompt.content }}</span>
    <el-input
      v-model="newSessionTitle"
      maxlength="10"
      placeholder="请输入新的标题"
      show-word-limit
      type="text"
      v-if="iseditorTitle"
    />
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogSubmit(PopUpPrompt)">
          {{ PopUpPrompt.button }}
        </el-button>
      </span>
    </template>
  </el-dialog>
  <!-- 其它提示 -->

  <div class="main">
    <div class="content">
      <div class="top">
        <div class="top_left">
          <div class="logo">
            <img src="@/static/pages/login/logo.svg" alt="" />
            <span class="name">纪元数位</span>
          </div>
          <div class="about">
            <div>关于</div>
            <div>联系我们</div>
          </div>
        </div>

        <div class="toLogin" @click="LoginButton" v-show="showLoginButton">
          注册/登录
        </div>
      </div>
      <div class="center">
        <div class="center_left">
          <div class="center_left_1">纪元视频</div>
          <div class="center_left_2">虚拟人物&声音</div>
          <div class="center_left_3">创作数字视频</div>
          <div class="center_left_4">
            简单一步，看见虚拟世界里那个妙语连珠的TA。<br />
            创造属于你的独特视频，让虚拟人与虚拟声音替你向世界表达。为你的文字和声音赋予多彩的灵魂。
          </div>
          <div class="center_left_5" @click="showInfo">创作视频</div>
        </div>
        <el-carousel
          height="37.9375rem"
          style="flex: 1"
          :autoplay="false"
          indicator-position="none"
          ref="carousel"
          :loop="false"
          arrow="never"
        >
          <el-carousel-item style="width: 100%; height: 100%" index="0">
            <div
              class="center_rigth"
              :class="ClickLogin ? 'center_rigth_active' : ''"
              v-show="!ClickLogin"
            >
              <img src="@/static/pages/login/login.svg" alt="" />
            </div>
          </el-carousel-item>
          <el-carousel-item index="1" class="LogonFormContainer">
            <div class="loginForm" v-if="loginOrRegister == '注册'">
              <div class="form_container">
                <div class="title">注册</div>
                <el-form
                  ref="ruleFormRef"
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  label-width="7.5rem"
                  class="form"
                >
                  <el-form-item label="昵称" prop="name" style="width: 100%">
                    <el-input v-model.number="ruleForm.name" />
                    <i class="iconfont icon-ren"></i>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="email" style="width: 100%">
                    <el-input v-model.number="ruleForm.email" />
                    <i class="iconfont icon-youxiang"></i>
                  </el-form-item>
                  <el-form-item label="密码" prop="pass" style="width: 100%">
                    <el-input
                      v-model="ruleForm.pass"
                      type="password"
                      autocomplete="off"
                      :show-password="true"
                      onchange="showMimaIcon"
                    />
                    <i class="iconfont icon-mima" v-if="errorPass"></i>
                  </el-form-item>
                  <el-form-item>
                    <el-checkbox
                      v-model="isAgreement"
                      size="large"
                      class="agreementCheckbox"
                    />
                    <div class="agreement">
                      我同意<span>平台协议，隐私政策</span>和<span>费用</span>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                      点击注册
                    </el-button>
                  </el-form-item>
                  <el-form-item>
                    <div class="tologin">
                      已经拥有平台账号? <span @click="toLogin">登录</span>
                    </div>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <div class="loginForm" v-if="loginOrRegister == '登录'">
              <div class="form_container">
                <div class="title">登录</div>
                <el-form
                  ref="ruleFormRef"
                  :model="ruleForm"
                  status-icon
                  :rules="rules"
                  label-width="7.5rem"
                  class="form"  
                >
                  <el-form-item
                    label="昵称"
                    prop="name"
                    style="width: 100%"
                    v-if="loginOrRegister.value == '注册'"
                  >
                    <el-input v-model.number="ruleForm.name" />
                    <i class="iconfont icon-ren"></i>
                  </el-form-item>
                  <el-form-item label="邮箱" prop="email" style="width: 100%">
                    <el-input v-model.number="ruleForm.email" />
                    <i class="iconfont icon-youxiang"></i>
                  </el-form-item>
                  <el-form-item label="密码" prop="pass" style="width: 100%">
                    <el-input
                      v-model="ruleForm.pass"
                      type="password"
                      autocomplete="off"
                      :show-password="true"
                      onchange="showMimaIcon"
                    />
                    <i class="iconfont icon-mima" v-if="errorPass"></i>
                  </el-form-item>
                  <el-form-item>
                    <el-checkbox
                      v-model="isAgreement"
                      size="large"
                      class="agreementCheckbox"
                    />
                    <div class="agreement">
                      我同意<span>平台协议，隐私政策</span>和<span>费用</span>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                      点击登录
                    </el-button>
                  </el-form-item>
                  <el-form-item>
                    <div class="tologin">
                      没有平台账号? <span @click="toLogin">前往注册</span>
                    </div>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
// 表单校验
import FormInstance from "element-plus";
import FormRules from "element-plus";
// 表单数据
const ruleForm = reactive({
  pass: "",
  name: "",
  email: "",
});
// 密码格式是否错误
const errorPass = ref(true);

const ruleFormRef = ref(FormInstance);
// 用户名
const checkName = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入用户昵称"));
  }
  setTimeout(() => {
    let reg = /^[\u4e00-\u9fa5]{1,20}$/;
    if (!reg.test(value.toString())) {
      callback(new Error("请输入用户昵称,中英文均可"));
    } else {
      callback();
    }
  }, 500);
};
// 密码
const validatePass = (rule, value, callback) => {
  if (value === "") {
    errorPass.value = true;
    callback(new Error("请输入密码"));
  } else {
    const res1 = new RegExp(
      /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{8,16}$/
    );
    const res2 = res1.exec(value);
    if (res2) {
      errorPass.value = true;
      callback();
    } else {
      errorPass.value = false;
      callback(
        new Error(
          "密码应为字母，数字，特殊符号(~!@#$%^&*()_.)，两种及以上组合，8-16位字符串，如：xiao123456"
        )
      );
    }
  }
};
// 邮箱
const checkEamil = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入邮箱"));
  } else {
    const res1 = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    const res2 = res1.exec(value);
    if (res2) {
      callback();
    } else {
      callback(new Error("邮箱格式错误"));
    }
  }
};

// 自定义校验规则
const rules = reactive({
  pass: [{ validator: validatePass, trigger: "blur" }],
  name: [{ validator: checkName, trigger: "blur" }],
  email: [{ validator: checkEamil, trigger: "blur" }],
});
// 是否同意
const isAgreement = ref(false);

// 清空表单
const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
// 表单校验

// 登录表单注册表单切换
const loginOrRegister = ref("注册");

// 是否点击登录注册按钮
const ClickLogin = ref(false);

const { proxy } = getCurrentInstance();
// 显示注册登录按钮
const showLoginButton = ref(true);
// 点击登录注册按钮
const LoginButton = () => {
  // this.$refs.carousel.next();

  proxy.$refs.carousel.next();
  // 注册登录按钮隐藏
  showLoginButton.value = false;
};
// 点击登录链接
const toLogin = () => {
  if (loginOrRegister.value == "注册") {
    loginOrRegister.value = "登录";
  } else {
    loginOrRegister.value = "注册";
  }
};

// 弹出提示框的boolean
const dialogVisible = ref(false);
// 弹出提示的内容
const PopUpPrompt = reactive({
  title: "",
  content: "",
  button: "",
});
// 弹出框消息自定义
const dialogCustomize = (data) => {
  if (
    PopUpPrompt.content != "" ||
    PopUpPrompt.content != null ||
    PopUpPrompt.title != null ||
    PopUpPrompt.title != "" ||
    PopUpPrompt.title != null
  ) {
    PopUpPrompt.content = data.content;
    PopUpPrompt.title = data.title;
    PopUpPrompt.button = data.button;
  } else {
    PopUpPrompt.content = "";
    PopUpPrompt.title = "";
  }
  if (!data.button) {
    PopUpPrompt.button = "好的";
  }
  dialogVisible.value = true;
};
// 登录函数
const loginFun = () => {
  // 前端校验完毕，传数据给后端
  dialogVisible.value = true;
  dialogCustomize({ content: "登录成功!" });
};
// 注册函数
const registerFun = () => {
  // 前端校验完毕，传数据给后端
  dialogVisible.value = true;
  dialogCustomize({ content: "注册成功!" });
};
// 点击登录注册校验
const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (isAgreement.value == true) {
      if (valid) {
        // 用户登录
        if (loginOrRegister.value == "登录") {
          loginFun();
        } else {
          // 用户注册
          registerFun();
        }
      } else {
        console.log("error submit!");
        return false;
      }
    } else {
      dialogCustomize({ content: "请同意协议!" });
      return;
    }
  });
};
// 弹出框按钮下一步操纵
const dialogSubmit = (e) => {
  dialogVisible.value = false;
};
// 点击创作视频
const showInfo = () => {
  dialogCustomize({ content: "请登录!" });
};
</script>

<style lang="scss" scoped>
// 弹出提示框内容样式
.PopUpPrompt {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main {
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    box-sizing: border-box;
    width: 79.6875rem;
    height: 43.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      height: 2.3125rem;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      align-items: center;

      .top_left {
        display: flex;
        .logo {
          display: flex;
          font-size: 2.375rem;
          align-items: center;
          margin-right: 5.625rem;

          img {
            width: 5.1875rem;
            height: 2.9375rem;
            overflow: hidden;
            margin-right: 0.625rem;
          }
        }

        .about {
          display: flex;
          align-items: center;

          font-size: 1.125rem;
          div {
            cursor: pointer;
          }
          div:nth-of-type(1) {
            margin-right: 5.3125rem;
          }
        }
        @media screen and (max-width: 55rem) {
          .about {
            display: none;
          }
        }
      }
      .toLogin {
        width: 6.625rem;
        height: 3rem;
        border-radius: 0.625rem;
        border: 0.125rem solid var(--primary-color);
        color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        font-size: 1.125rem;
        cursor: pointer;
      }
    }
    .center {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .center_left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .center_left_1 {
          color: var(--primary-color);
          font-size: 1.375rem;
          margin-bottom: 0.9375rem;
        }
        .center_left_2 {
          font-size: 3.75rem;
        }
        .center_left_3 {
          font-size: 3.75rem;
          margin-bottom: 2.375rem;
        }
        .center_left_4 {
          font-size: 1.125rem;
          line-height: 1.875rem;
          color: #555555;
          margin-bottom: 2.5rem;
          max-width: 32.875rem;
        }
        .center_left_5 {
          width: 11.0625rem;
          height: 3.375rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.125rem;
          color: white;
          background-color: var(--primary-color);
          border-radius: 0.625rem;
          cursor: pointer;
        }
      }

      .center_rigth {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        img {
          width: 37.9375rem;
          height: 37.9375rem;
        }
      }
      .loginForm {
        flex: 1;
        display: flex;
        border-radius: 1.5rem;

        align-items: center;
        justify-content: center;
        .form_container {
          width: 37.3125rem;
          height: 37.9375rem;
          padding: 2.875rem;
          box-sizing: border-box;
          .title {
            font-size: 2rem;
            color: var(--primary-color);
            margin-bottom: 2.5rem;
          }
          form {
            .el-form-item {
              display: flex;
              :deep(.el-form-item__content) {
                margin: 0 !important;
                .el-button {
                  width: 100%;
                  background-color: var(--primary-color);
                  height: 3rem;
                  border-radius: 0.5625rem;
                  font-size: 1.125rem;
                }
              }
              :deep(.el-input__wrapper) {
                height: 3rem;
                border-radius: 0.625rem;
              }
              :deep(.el-form-item__label) {
                width: 100% !important;
                display: flex;
                padding: 0;
                margin: 0;
                flex-direction: row-reverse;
              }
              display: flex;
              flex-direction: column;

              .iconfont {
                position: absolute;
                right: 1.875rem;
                font-size: 1.25rem;
                color: #b8b8b8;
              }
              .agreement {
                margin-left: 0.625rem;
                color: #b8b8b8;
                font-size: 0.75rem;
                display: flex;
                span {
                  color: var(--primary-color);
                }
              }
              .tologin {
                color: #b8b8b8;
                font-size: 0.75rem;
                span {
                  margin-left: 1.25rem;
                  color: var(--primary-color);
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 55rem) {
      .top {
        padding: 0 1.25rem;
        box-sizing: border-box;
      }
      .center {
        display: flex;
        flex-direction: column;
        .center_left {
          margin: 1.25rem;
        }
        .center_rigth {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
}
</style>
