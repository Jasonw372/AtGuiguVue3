<script setup lang="ts">
import useUserStore from '@/stores/modules/user'
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const $router = useRouter()

const buttonLoading = ref<boolean>(false)

const loginForm = reactive<{
  username: string
  password: string
}>({
  username: '',
  password: '',
})
const userStore = useUserStore()

const login = async () => {
  buttonLoading.value = true
  try {
    await userStore.userLogin(loginForm)
    $router.push({ path: '/' })

    ElNotification({
      type: 'success',
      message: '登录成功',
    })


  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }

  buttonLoading.value = false
}
</script>

<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12">
        <el-form class="login-form" :model="loginForm">
          <h1>登录</h1>
          <h2>欢迎来到硅谷甄选</h2>

          <el-form-item>
            <el-input
              type="text"
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button :loading="buttonLoading" type="primary" class="login-btn" @click="login">
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