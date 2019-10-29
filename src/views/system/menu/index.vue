<template>
  <div class="sys_menu">
    <div class="sys_menu_header">
      <el-button type="primary" @click="openMenu()">新增菜单</el-button>
    </div>
    <ul id="treeDemo" class="ztree"></ul>
    <el-dialog :visible.sync="dialogVisible" @close="closeDialog" title="添加菜单">
      <div class="input_content">
        <p>菜单code:</p>
        <el-input
          class="input_input"
          placeholder="请输入菜单code"
          v-model="menuCode">
        </el-input>
      </div>
      <div class="input_content">
        <p>菜单名称:</p>
        <el-input
          class="input_input"
          placeholder="请输入菜单名称"
          v-model="menuName">
        </el-input>
      </div>
      <div class="input_content">
        <p>菜单排序:</p>
        <el-input
          class="input_input"
          placeholder="请输入菜单序号"
          v-model="menuSort">
        </el-input>
      </div>
      <div class="input_content">
        <p>描述:</p>
        <el-input
          class="input_input"
          placeholder="请输入描述"
          v-model="description">
        </el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="addMenu">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      homeIcon: require('../../../assets/img/icon/menu_2.jpg'),
      childIcon: require('../../../assets/img/icon/1_close.png'),
      dialogVisible: false
    }
  },
  mounted() {
    this.getMenuList()
  },
  methods: {
    getMenuList() {
      const _this = this
      const setting = {
        view: {
          addHoverDom: addHoverDom,
          removeHoverDom: removeHoverDom,
          selectedMulti: false
        },
        edit: {
          enable: true,
          editNameSelectAll: true,
          showRemoveBtn: true,
          showRenameBtn: true
        },
        data: {
          simpleData: {
            enable: true
          }
        },
        callback: {
          beforeRemove: beforeRemove,
          beforeEditName: beforeEditName
        }
      }
      const zNodes = [
        { id: 1, pId: 0, name: '父节点 1', open: true },
        { id: 11, pId: 1, name: '叶子节点 1-1' },
        { id: 12, pId: 1, name: '叶子节点 1-2' },
        { id: 13, pId: 1, name: '叶子节点 1-3' },
        { id: 2, pId: 0, name: '父节点 2', open: true },
        { id: 21, pId: 2, name: '叶子节点 2-1' },
        { id: 22, pId: 2, name: '叶子节点 2-2' },
        { id: 23, pId: 2, name: '叶子节点 2-3' },
        { id: 3, pId: 0, name: '父节点 3', open: true },
        { id: 31, pId: 3, name: '叶子节点 3-1' },
        { id: 32, pId: 3, name: '叶子节点 3-2' },
        { id: 33, pId: 3, name: '叶子节点 3-3' }
      ]
      console.log(55555, $.fn.zTree)
      for (let i = 0; i < zNodes.length; i++) {
        if (zNodes[i].pId) {
          zNodes[i].icon = this.homeIcon
        } else {
          zNodes[i].open = true
          zNodes[i].icon = this.childIcon
        }
      }
      function addHoverDom(treeId, treeNode) {
        var sObj = $('#' + treeNode.tId + '_span')
        if (treeNode.editNameFlag || $('#addBtn_' + treeNode.tId).length > 0) return
        var addStr = "<span style='height: 16px;margin-top: 0' class='button add' id='addBtn_" + treeNode.tId +
          "' title='add node' onfocus='this.blur();'></span>"
        sObj.after(addStr)
        var btn = $('#addBtn_' + treeNode.tId)
        if (btn) {
          btn.bind('click', function() {
            $.fn.zTree.getZTreeObj('treeDemo')
            console.log('add')
            _this.openMenu('add')
            return false
          })
        }
      };
      function removeHoverDom(treeId, treeNode) {
        $('#addBtn_' + treeNode.tId).unbind().remove()
      };
      // var className = 'dark'
      function beforeEditName(treeId, treeNode) {
        // className = (className === 'dark' ? '' : 'dark')
        // $.fn.zTree.getZTreeObj('treeDemo')
        console.log('edit')
        _this.openMenu('edit')
        return false
      }
      function beforeRemove(treeId, treeNode) {
        // className = (className === 'dark' ? '' : 'dark')
        console.log('remove')
        _this.deleteMenu()
        return false
      }
      $.fn.zTree.init($('#treeDemo'), setting, zNodes)
    },
    openMenu(type) {
      this.type = type
      this.dialogVisible = true
    },
    deleteMenu() {

    },
    addMenu() {

    },
    closeDialog() {
      this.dialogVisible = false
      this.clearInput()
    },
    clearInput() {
      this.menuId = ''
      this.parentMenuId = null
      this.menuCode = ''
      this.menuName = ''
      this.menuSort = null
      this.description = null
    }
  }
}
</script>

<style scoped lang="less">
  .sys_menu {
    display: block;
  }
  /deep/.el-button {
    padding: 10px 25px;
  }
  .sys_menu_header {
    display: flex;
    align-items: center;
  }
  .ztree li span.button.add {
    /*margin-left:2px;
    margin-right: -1px;
    background-position:-144px 0;
    vertical-align:top;
    *vertical-align:middle;*/
  }
  .input_content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    p {
      width: 100px;
    }
  }
  .input_input {
    width: 300px;
  }
</style>
