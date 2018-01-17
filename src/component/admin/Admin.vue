<template>
    <el-container class="admin">
        <el-aside width="200px">
            <Aside></Aside>
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
   import Aside from '../common/Aside.vue';
   import Header from '../common/Header.vue';
   export default {
       components: {
           Aside,
           Header
       }
   }
</script>
<style scoped>
     .admin {
        height: 100%;
     }
     .el-header {
         background:skyblue;
     }
     .el-aside {
         background: skyblue;
     }
     .el-main {
         background: #e9eef3;
     }
     
</style>