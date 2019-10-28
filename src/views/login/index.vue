<template>
  <div class="login_contain">
    <div class="login_form">
      <p class="login_title">老郑后台管理系统</p>
      <div class="form_content">
        <div class="form_content_item">
          <i class="iconfont icon-user icon_prefix"></i>
          <p class="form_content_item_p">用户名</p>
          <el-input class="login_input" v-model="userName"></el-input>
        </div>
        <div class="form_content_item">
          <i class="iconfont icon-jiesuo icon_prefix"></i>
          <p class="form_content_item_p">密码</p>
          <el-input class="login_input"  v-model="password"></el-input>
        </div>
        <div class="form_content_item">
          <el-checkbox v-model="checked"></el-checkbox>
          <p class="form_content_item_check">记住密码</p>
        </div>
        <div class="btn_content">
          <el-button type="primary" @click="handleSubmit">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      userName: '',
      password: '',
      checked: false
    }
  },
  methods: {
    // 登录
    async handleSubmit() {
      const param = {
        userName: this.userName,
        password: this.password,
        check: this.check,
        uid: 1
      }
      await this.$store.dispatch('saveUserInfoData', param)
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style scoped lang="less">
  .login_contain {
    height: 100vh;
    width: 100vw;
    background: url("../../assets/img/bjIndex.jpg") no-repeat center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login_form {
    width: 320px;
    height: 265px;
    background: white;
    border-radius: 5px;
    padding: 20px 40px;
  }
  .login_title {
    text-align: center;
    font-size: 18px;
    color: #15bafe;
    font-weight: bold;
  }
  .form_content {
    margin-top: 20px;
  }
  /deep/.form_content_item {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .icon_prefix {
      font-size: 20px;
      color: #666666;
    }
    .form_content_item_p {
      width: 60px;
      text-align: center;
      color: #666666;
      font-size: 14px;
      font-weight: 400;
    }
    .el-input__inner {
      height: 32px;
      line-height: 32px;
    }
    .login_input {
      width: 250px;
    }
    .form_content_item_check {
      color: #666666;
      font-size: 14px;
      font-weight: 400;
      margin-left: 10px;
      margin-top: -3px;
    }
  }
  /deep/.btn_content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    .el-button {
      flex: 1;
    }
  }
</style>
