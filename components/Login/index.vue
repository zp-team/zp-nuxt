<template>
  <section @keyup.enter="login('form')">
    <el-dialog title="登录" custom-class="dialog-login" :visible.sync="showDialog" @close="resetFields('form')">
      <div class="error-msg row" v-if="errorMsg"> 对不起，您的账号未激活！ </div>

      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" auto-complete="off" :autofocus="true" placeholder="请输入手机号/邮箱"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>

        <div class="jm-modal-pwd-operate clearfix">
          <el-checkbox v-model="form.rememberMe">下次自动登录</el-checkbox>
          <a class="jm-modal-login-forget" :href="`XXX`" target="_blank">忘记密码</a>
        </div>

        <el-button :disabled="loading" class="login-btn" type="primary" @click="login('form')">登 录</el-button>
      </el-form>

      <div class="dialog-footer">
        <div class="login-register">
          <span class="color-font-6">没有账号？</span>
          <a :href="`XXX`" target="_blank">注册账号</a>
        </div>
      </div>
    </el-dialog>
  </section>
</template>

<script>
export default {
  name: 'login-dialog',
  data() {
    return {
      loading: false,
      errorMsg: '',
      form: {
          username: '',
          password: '',
          rememberMe: false
      },
      rules: {                                        
        username: [
          {required: true, message: '请输入手机号/邮箱', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入账号密码', trigger: 'blur'}
        ]
      }
    }
  },
  computed: {
    showDialog: function() {
      return this.$store.state.user.dialogState
    }
  }
}
</script>

<style scoped>
  @import './index.scss';
</style>
