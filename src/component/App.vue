<template>
    <div>
       小花花送给你
        <router-view></router-view>
        <!-- 根组件会有一些子组件, 我把这些子分为两种: 一种是子页面, 一种是页面布局结构 -->      
        <el-rate v-model="value" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
        </el-rate>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value:3
            };
        }
    }
</script>

<style scoped>

</style>