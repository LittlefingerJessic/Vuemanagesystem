<template>
  <div>
      <el-breadcrumb>
  <el-breadcrumb-item class='aile'>首页</el-breadcrumb-item>
</el-breadcrumb>
<div class="demo-input-suffix yyh">
  申请人<el-input>
  </el-input>身份证号<el-input>
  </el-input>提交时间<el-input>
  </el-input>～<el-input>
  </el-input><el-button type="primary">搜索</el-button><el-button type="primary">重置</el-button>
  </div>
  <div class='rf'>
   <el-table
      :data="tableData" border stripe>
      <el-table-column label="序号" width='60' type="index"></el-table-column>
      <el-table-column
        prop="id"
        label="申请编号">
      </el-table-column>
      <el-table-column
        prop="type"
        label="申请单类型">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
       <el-table-column
        prop="name"
        label="申请人">
      </el-table-column>
       <el-table-column
        prop="idcard"
        label="身份证号">
      </el-table-column>
       <el-table-column
        prop="time"
        label="申请创建时间">
      </el-table-column>
      <el-table-column label="操作" width='150' type="index"><span style='color:blue;padding-right:10px'>受理</span><span style='color:red'>删除</span></el-table-column>
    </el-table>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div></div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        id: '25654821434',
        type: '姓名变更申请单',
        status: '未受理',
        name: '李某某',
        idcard: '360124198506030634',
        time: '2020-08-22 14:35'
      }, {
        id: '25654821434',
        type: '姓名变更申请单',
        status: '未受理',
        name: '李某某',
        idcard: '360124198506030634',
        time: '2020-08-22 14:35'
      }, {
        id: '25654821434',
        type: '姓名变更申请单',
        status: '未受理',
        name: '李某某',
        idcard: '360124198506030634',
        time: '2020-08-22 14:35'
      }, {
        id: '25654821434',
        type: '姓名变更申请单',
        status: '未受理',
        name: '李某某',
        idcard: '360124198506030634',
        time: '2020-08-22 14:35'
      }]
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="less" scoped>
.aile {
  padding-left: 200px;
}
.el-input {
    width:120px
}
.yyh {
    padding-left: 200px;
    padding-top:20px;
}
.el-input {
    padding-right: 20px;
}
.rf {
    padding-left: 200px;
}
</style>
