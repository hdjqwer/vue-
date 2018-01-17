<template>
  <el-dropdown class="title">  
    <span class="el-dropdown-link">
     <span>{{weclome}}</span>
    <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>修改密码</el-dropdown-item>
      <el-dropdown-item @click.native="logout">注销</el-dropdown-item>    
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
      data(){
        return {
          weclome:'用户设置'
        }
      },
      methods: {
        logout(){
          this.$http.get(this.$api.logout).then(res=>{
            if(res.data.status==0){
              this.$router.push({name:'login'});
            }else{
              this.$alert(res.data.message);
            }
          })
        }
      }
  }
</script>
<style scoped>
    .title{
      display: block;
      line-height: 60px;
      color: white;
      text-align: right;
    }
    .navbox{
     text-align: center;
    }
</style>