<template>
    <div>
        登录界面
    </div>
</template>
<script>
    export default {
        data(){
            return {
                a:10,
                b:50
            }
        },
        created () {
            this.$http.get(this.$api.isLogin).then(res =>{
                console.log(res.data);
                
            })
        }
    }
</script>
<script scoped></script>