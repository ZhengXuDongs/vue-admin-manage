<template>
  <div>
    <template v-for="item in menuData">
      <el-submenu
        :index="item.code"
        :class="{paddingActive: !item.image && is360 && !edg && !fast}"
        v-if="item.children"
        :key="item.code">
        <template slot="title">
          <img
            class="icon_image"
            :src="item.image">
          <span slot="title">{{item.name}}</span>
        </template>
        <left-menu
          v-if="item.children"
          :menu-data="item.children"></left-menu>
      </el-submenu>
      <el-menu-item
        class="menu_item"
        @click="handleAddTabs(item)"
        :index="item.code"
        v-else
        :key="item.code">
        <img
          v-if="!item.isSingle"
          class="icon_image"
          :src="item.image">
        <span
          v-else
          class="radius"
          :class="{isColor: keyCode === item.code}"></span>
        {{item.name}}
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  props: ['menuData'],
  data() {
    return {
      data: [],
      keyCode: '',
      is360: false,
      edg: false,
      fast: false
    }
  },
  mounted() {
    const navigator = window.navigator
    // console.log(555, navigator)
    this.edg = window.navigator.userAgent.toLowerCase().indexOf('edge') > -1
    this.is360 = !navigator.userActivation
    if (this.is360) {
      if (navigator.userAgent.indexOf('AppleWebKit') !== -1) {
        this.fast = true
      }
    }
  },
  methods: {
    handleAddTabs: function(tabs) {
      console.log(tabs)
      document.title = tabs.name
      this.keyCode = tabs.code
      window.sessionStorage.setItem('activeIndex', tabs.code)
      this.$emit('getBreadcrumb', tabs.breadcrumbData)
      this.$router.push({
        path: tabs.path
      })
    },
    getBreadcrumb(array) {
      this.$emit('getBreadcrumb', array)
    }
  }
}
</script>

<style scoped lang="less">
  .icons {
    color: white;
  }
  /deep/ .paddingActive {
    .el-submenu__title {
      padding-left: 12px !important;
    }
  }
  .el-submenu {
    text-align: left;
  }
  .menu_item {

    display: flex;
    align-items: center;
    /*padding-left: 30px !important;*/
    padding-right: 0 !important;
    text-align: left;
  }
  /deep/ .isColor {
    background: #409eff !important;
  }
  .icon_image {
    margin-right: 6px;
  }
  /deep/ .radius {
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    margin-right: 6px;
  }

  /*/deep/.el-submenu.is-active .el-submenu__title {
      background: linear-gradient(to right, #1c5fb9, #193f8e) !important;
      background: -webkit-gradient(to right, #1c5fb9, #193f8e) !important;
      background: -webkit-linear-gradient(to right, #1c5fb9, #193f8e) !important;
      background: -o-linear-gradient(to right, #1c5fb9, #193f8e) !important;
      background: -ms-linear-gradient(to right, #1c5fb9, #193f8e) !important;
      background: linear-gradient(to right, #1c5fb9, #193f8e) !important;
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c5fb9', endColorstr='#193f8e',GradientType=0 );
    }
    :root .el-submenu.is-active .el-submenu__title{filter:none;}*/
</style>
