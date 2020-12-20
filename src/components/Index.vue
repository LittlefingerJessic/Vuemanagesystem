<template lang="">
   <el-container>
  <el-header>
      <div>便民系统管理后台</div><div @click="full" class='el-icon-full-screen'>
      </div></el-header>
  <el-container>
    <el-aside :width="isshow ? '14px' : '240px'">
      <div class='toggle-button' @click='toggle'>|||
      </div>
         <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="white"
      text-color="black"
      active-text-color="blue">
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title" @click='tiao' >登陆页</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-document"></i>
        <span slot="title" @click='meiyisi'>首页</span>
      </el-menu-item>
            <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>行政办公-办事大厅</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><i class="el-icon-document"></i>审核界面</el-menu-item>
          <el-menu-item index="1-2"><i class="el-icon-document"></i>审核通过弹窗</el-menu-item>
          <el-menu-item index="1-3"><i class="el-icon-document"></i>审核未通过弹窗</el-menu-item>
          <el-menu-item index="1-4"><i class="el-icon-document"></i>我的事项</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-6">
          <template slot="title">已通过审核</template>
          <el-menu-item index="1-6-1">已通过详情</el-menu-item>
        </el-submenu>
        <el-submenu index="1-7">
          <template slot="title">未通过审核</template>
          <el-menu-item index="1-7-1">未通过详情</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="10">
        <i class="el-icon-document"></i>
        <span slot="title">申请单查询</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script>
import screenfull from 'screenfull'
export default {
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    full () {
      screenfull.toggle()
    },
    tiao () {
      this.$router.push('/loginuser')
    },
    meiyisi () {
      this.$router.push('/mainpage')
    },
    toggle () {
      this.isshow = !this.isshow
    }
  }
}
</script>
<style lang="less" scoped>
.el-header {
    position: absoulte;
    height: 44px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding-top:9px;
    border: 1px solid #DCDCDC
}
.el-container {
    height:100%;
}
.el-main {
  padding: 0
}
.el-aside {
  height:100%;
  border: 1px solid #DCDCDC;
}
.toggle-button {
  font-size: 10px;
  line-height: 24px;
  color: blue;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
