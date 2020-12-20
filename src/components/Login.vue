<template>
  <div class='mainbody'>
        <!--登陆界面-->
            <div class='nihao'><img src="https://org.modao.cc/uploads4/images/5455/54553106/v2_qh1fbb.png" alt=""></div>
        <div class='aile'>经开公安户政便民服务系统</div>
        <div class='contain'>
        <el-form class='loginform' :model='loginForm' ref='loginformRef' >
                    <!--用户名-->
                <el-form-item prop='username'>
        <el-input prefix-icon="el-icon-user-solid" v-model='loginForm.username' placeholder="请输入用户名" >
        </el-input>
            </el-form-item>
            <!--密码-->
            <el-form-item prop='password'>
        <el-input prefix-icon="el-icon-s-goods" v-model='loginForm.password' type='password' >
        </el-input>
            </el-form-item>
    <el-checkbox label="记住密码"></el-checkbox>
    <el-checkbox label="自动登录"></el-checkbox>
            <el-form-item class='btns'>
                <el-button type="primary" @click='login'>登陆</el-button>
                <el-button type="info" @click='resetLoginForm' >重置</el-button>
            </el-form-item>
            </el-form></div></div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginformRef.resetFields()
    },
    login () {
      this.$router.push('/mainpage')
    }
  }
}
</script>

<style lang="less" scoped>
.mainbody {
    background:url(../assets/v2_qh1f96.jpg) no-repeat;
    width: auto;
    height:100%;
    padding:0;
    .nihao {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }
    img {
      width:145px;
      height: auto;
      padding-top: 20px;
    }
    .aile {
        font-size: 50px;
        color: white;
        position: absolute;
        left: 50%;
        top: 25%;
        transform: translate(-50%);
    }
    .contain {
        width:500px;
        height:350px;
        background-color: white;
        border-radius: 15px;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        margin-top: 250px;
    }
}
.btns {
    display:flex;
    justify-content: flex-end;
}
.loginform {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 83px;
  box-sizing: border-box;
}
</style>
