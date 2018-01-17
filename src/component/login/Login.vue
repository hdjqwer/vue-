<template>
  <div class="login">
    <el-form label-width="80px" :model="formLabelAlign" :rules="rules" ref="ruleform2">
      <el-form-item label="用户名" prop="uname">
        <el-input v-model="formLabelAlign.uname"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="npwd">
        <el-input v-model="formLabelAlign.upwd" type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" size="small" @click="submitForm('ruleform2')">登录</el-button>
    <el-button size="small" @click="resetForm('ruleform2')">重置</el-button>
  </div>
</template>
<script>
  export default {
    data() {
      function testName(rule, value, callback) {
        if (value == '') {
          callback(new Error('请输入账号！'));
        } else {
          callback();
        }
      };
      function testWord(rule, value, vallback) {
        if (value == '') {
          callback(new Error('请输入密码！'));
        } else {
          callback();
        }
      };
      return {
        formLabelAlign: {
          uname: '',
          upwd: ''
        },
        rules: {
          name: [
            {validator: testName,message:"请输入您的用户名",trigger: "blur" },
            {required:true,message:"账号长度在4~18个字符",trigger:"blur"}
          ],
          word: [
            {validator: testWord,message:"请输入您的密码",trigger: "blur" },
            {pattern:/\w{6,12}$/,message:"密码长度在6~12个字符",trigger:"blur"}

          ]
        }
      };
    },

    methods: {
          login() {
            this.$http.post(this.$api.login, this.formLabelAlign)
              .then(res => {
                if (res.data.status == 0) {
                  this.$router.push({name:'admin'});
                } else {
                  this.$alert(res.data.message);
                }
              })
          },
          submitForm(formName) {
            this.$refs[formName].validate(res => {
              if (res) {
                this.login();
              } else {
                this.$alert('请重新登录');
              }
            })
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
  }
</script>
<style scoped lang="less">
  .login {
    width: 450px;
    height: 220px;
    background-color: pink;
    border-radius: 6px;
    border: 4px solid white;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-top: 30px;
    padding-right: 15PX;
    text-align: center;
  }
</style>