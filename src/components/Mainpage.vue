<template lang="">
<div>
  <el-header style='height: 80px'>
      <img src="../assets/1.jpg" alt="">
      </el-header>
    <el-aside width='400px'>
        <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      background-color="white"
      text-color="black"
      active-text-color="blue">
       <el-menu-item index="4">
        <i class="el-icon-s-home"></i>
        <span slot="title" @click='dla'>首页</span>
      </el-menu-item>
      <el-submenu index="15">
        <template slot="title">
          <i class="el-icon-monitor"></i>
          <span>行政办公</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="15-1" @click='dojob'>办事大厅</el-menu-item>
          <el-menu-item index="15-2">我的事项</el-menu-item>
          <el-menu-item index="15-3">已通过审核</el-menu-item>
           <el-menu-item index="15-4">未通过审核</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-lock"></i>
        <span slot="title">组织权限</span>
      </el-menu-item>
       <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">用户设置</span>
      </el-menu-item>
       <el-menu-item index="11">
        <i class="el-icon-grape"></i>
        <span slot="title">组织成员</span>
      </el-menu-item>
       <el-menu-item index="5">
        <i class="el-icon-folder"></i>
        <span slot="title">历史记录</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main></div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    tza () {
      this.$router.push('/myproject')
    },
    dojob () {
      this.$router.push('/myproject')
    },
    dla () {
      this.$router.push('/first')
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.el-menu {
    position: absolute;
    width:200px;
}
.el-header {
    padding:0;
    }
</style>
