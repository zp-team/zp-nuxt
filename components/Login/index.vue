<template>
  <section @keyup.enter="login('form')">
    <el-dialog title="登录" custom-class="dialog-login" :visible.sync="showDialog" @close="resetFields('form')">
      <div class="error-msg row" v-if="errorMsg"></div>
      <el-form :model="form" ref="form" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" auto-complete="off" prefix-icon="iconfont icon-people" :autofocus="true" placeholder="请输入手机号/邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password"  auto-complete="off" prefix-icon="iconfont icon-lock" placeholder="请输入密码"></el-input>
        </el-form-item>
        <div class="operate-pwd clearfix">
          <el-checkbox v-model="form.rememberMe">下次自动登录</el-checkbox>
          <a class="pull-right" :href="`XXX`" target="_blank">忘记密码</a>
        </div>
        <el-button :disabled="loading" :loading="loading" class="login-btn" type="primary" @click="login('form')">登 录</el-button>
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
      loading: false, // 防重复提交
      errorMsg: '11',   // 错误信息
      form: {         // 表单内容
          username: '',
          password: '',
          rememberMe: false
      },
      rules: {        // 验证规则                                
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
    showDialog: {
      get() {
        return this.$store.state.user.dialogState
      },
      set (newVal) {
        this.$store.state.user.dialogState = newVal
      }
    }
  },
  methods: {
    resetFields(formName) {
      this.$refs[formName].resetFields()
    },
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading =  true
          this.$axios.$apis.login(
            this.form
          ).then((data) => {
            let _self = this
            this.$message({
              message: '登录成功',
              type: 'success',
              duration: 1000,
              onClose: function(){
                _self.loading = false
                _self.$store.commit('SET_DIALOGSTATUS', false)
              }
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" type="text/scss">
  @import "~assets/scss/element-variables";
  @import './index';
</style>
