<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
import type { ElForm } from 'element-plus/lib/components/index.js'

const $router = useRouter()
const $route = useRoute()

const buttonLoading = ref<boolean>(false)

const loginForm = reactive<{
  username: string
  password: string
}>({
  username: '',
  password: '',
})
let loginFormRef = ref<InstanceType<typeof ElForm>>()

const userStore = useUserStore()

const login = async () => {
  buttonLoading.value = true

  loginFormRef.value?.validate()

  try {
    await userStore.userLogin(loginForm)
    const redirect = $route.query.redirect as string | undefined
    $router.push({ path: '/', query: { redirect: redirect || '/' } })

    ElNotification({
      type: 'success',
      title: `HI,${getTime()}好`,
      message: '欢迎回来',
    })
    buttonLoading.value = false
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
    buttonLoading.value = false
  }
}

//自定义校验规则函数
const validatorUserName = (rule: any, value: any, callback: any) => {
  //rule:即为校验规则对象
  //value:即为表单元素文本内容
  //函数:如果符合条件callBack放行通过即为
  //如果不符合条件callBack方法,注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

//定义表单校验需要配置对象
const rules = {
  //规则对象属性:
  //required,代表这个字段务必要校验的
  //min:文本长度至少多少位
  //max:文本长度最多多少位
  //message:错误的提示信息
  //trigger:触发校验表单的时机 change->文本发生变化触发校验,blur:失去焦点的时候触发校验规则
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change' }
    { trigger: 'change', validator: validatorUserName },
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change' }
    { trigger: 'change', validator: validatorPassword },
  ],
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12">
        <el-form
          class="login-form"
          :model="loginForm"
          :ref="loginFormRef"
          :rules="rules"
        >
          <h1>登录</h1>
          <h2>欢迎来到硅谷甄选</h2>

          <el-form-item prop="username">
            <el-input
              type="text"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              :loading="buttonLoading"
              type="primary"
              class="login-btn"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.login_container {
  width: 100%;
  min-height: 100vh;
  background: url('@/assets/images/background.jpg');

  .login-form {
    position: relative;
    width: 80%;
    top: 20vh;
    padding: 60px;

    background: url('@/assets/images/login_form.png');
    background-size: cover;

    h1 {
      color: aliceblue;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: aliceblue;
      margin: 30px 0;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>
