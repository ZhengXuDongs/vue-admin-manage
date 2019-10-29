<template>
  <el-container>
    <el-header>
      <div class="index_header">
        <div class="index_header_left">
          <img src="../assets/img/logo.jpg"/>
          <p>老郑后台管理系统</p>
        </div>
        <div class="index_header_right">
          <div class="index_header_right_item">
            <i class="iconfont icon-geren"></i>
            <p>管理员</p>
          </div>
          <div class="index_header_right_item" @click="handleExit">
            <i class="iconfont icon-logout"></i>
            <p>退出系统</p>
          </div>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside
        class="aside"
        width="230px">
        <el-menu
          background-color="#263238"
          text-color="#fff"
          active-text-color="#21b7fd"
          :unique-opened="true"
          :default-active="activeIndex"
          class="el-menu-vertical-demo e_menu menus menu_left">
          <left-menu
            :menu-data="menuData"
            @getBreadcrumb="getBreadcrumb"
          ></left-menu>
        </el-menu>
      </el-aside>
      <el-main>
        <div class="contain_main_top">
          <img
            class="address_icon"
            src="../assets/img/zb.png" />
          <p class="p1">当前位置：</p>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item
              v-for="(item, index) in breadcrumbData"
              :key="index"
              :to="{ path: item.path }">
              {{item.name}}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="index_main">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftMenu from '../components/left-menu'

export default {
  name: 'Index',
  components: {
    LeftMenu
  },
  data() {
    return {
      menuData: [],
      activeIndex: 'Home',
      breadcrumbData: [
        { path: '/home/index', name: '首页' }
      ]
    }
  },
  mounted() {
    this.menuData = this.$store.getters.getAsyncRouteInfo[0].children
    const activeIndex = window.sessionStorage.getItem('activeIndex')
    if (activeIndex) {
      this.activeIndex = activeIndex
    }
    const breadcrumbData = JSON.parse(window.sessionStorage.getItem('breadcrumbData'))
    if (breadcrumbData && breadcrumbData.length > 0) {
      this.breadcrumbData = breadcrumbData
    }
  },
  methods: {
    // 获取面包屑导航
    getBreadcrumb(array) {
      console.log(222, array)
      window.sessionStorage.setItem('breadcrumbData', JSON.stringify(array))
      this.breadcrumbData = array
    },
    // 退出登录
    handleExit() {
      // this.$store.dispatch('clearUserInfo')
      this.$router.push({ path: '/login' })
    }
  }
}
</script>

<style scoped lang="less">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: calc(100vh - 60px);
  }

  /deep/.el-menu {
    border-right: none;
  }
  .index_main {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    display: block;
    height: calc(100% - 80px);
    width: calc(100% - 40px);
    background: white;
    padding: 20px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    background: #f1f4f5;
    color: #333;
    padding: 0 20px 20px;
  }

  .index_header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .index_header_left {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    color: white;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-left: 40px;
    }
    p {
      margin-left: 10px;
    }
  }
  .index_header_right {
    display: flex;
    align-items: center;
    .index_header_right_item {
      display: flex;
      align-items: center;
      color: #FFFFFF;
      margin-right: 20px;
      cursor: pointer;
      &:hover {
        color: #15bafe;
      }
      i {
        font-size: 18px;
        font-weight: bold;
      }
      p {
        font-size: 14px;
        font-weight: bold;
        margin-left: 5px;
      }
    }
  }
  .aside {
    background: #263238;
    height: calc(100vh - 60px);
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    &::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    /*定义滚动条轨道 内阴影+圆角*/
    &::-webkit-scrollbar-track {
      background-color: #083286; /*滚动条的背景区域的圆角*/
      border-radius: 3px; /*滚动条的背景颜色*/
      width: 5px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    /*定义滑块 内阴影+圆角*/
    &::-webkit-scrollbar-thumb {
      border-radius: 10px; /*滚动条的圆角*/
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #1142a7; /*滚动条的背景颜色*/
    }
  }
  /deep/.contain_main_top {
    height: 40px;
    display: flex;
    align-items: center;
    .address_icon {
    }
    .p1 {
      font-size: 12px;
      color: #21b7fd;
      margin-left: 6px;
    }
    .el-breadcrumb__inner {
      color: #21b7fd;
      font-size: 12px;
      font-weight: normal;
      &:hover {
        color: #21b7fd;
      }
    }
    .el-breadcrumb__separator {
      color: #21b7fd;
    }
    .el-breadcrumb__inner .is-link {
      color: #21b7fd;
      font-size: 12px;
      font-weight: normal;
      &:hover {
        color: #21b7fd;
      }
    }
  }
</style>
