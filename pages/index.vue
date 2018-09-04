<template>
	<section>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">一、弹窗类</div>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary" @click.prevent="showLogin()">登录</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">二、浮层类</div>
      </el-col>
    </el-row>
    <el-row>
 
    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">三、显示类</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">日期格式化：<b>{{'1536053083493'|moment('YYYY-MM-DD hh:mm:ss')}}</b></el-col>
      <el-col :span="6">字符串超出截取：<b>{{'这是一条测试信息'|cutstr(10)}}</b></el-col>
      <el-col :span="6">
        图片懒加载：<img v-lazyload.cdn='`/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg`' height="80" />
      </el-col>

    </el-row>

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">四、图标类</div>
      </el-col>
    </el-row>
    <el-row>
        <span class="tel">
          <i class="iconfont icon-phone"></i> 电话
        </span>
        <el-button type="primary"><i class="iconfont icon-search"></i> 搜索</el-button>
    </el-row>
	</section>
</template>

<script>
  export default {
    async asyncData({ $axios }) {

    },
    data() {
      return {
        
      }
    },
    methods: {
      showLogin (url) {
        this.$store.commit('SET_DIALOGSTATUS', true)
        
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  @import './index.scss';
</style>
