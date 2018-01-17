<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu v-for="item in navMenu" :index="item.title" :key="item.title">
            <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>{{item.title}}</span>
            </template>
            <el-menu-item v-for="sonitem in item.children" index="sonitem.title" :key="sonitem.title">
                <router-link to="sonitem.path">{{sonitem.title}}</router-link>
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>
<script>
    export default {
        data() {
            return {
                navMenu: [
                    {
                        title: "首页",
                        children: [{ title: "公司文化", path: "/a" },
                        { title: "公司简介", path: "/b" },
                        { title: "招聘", path: "/c" }
                        ]
                    },
                    {
                        title: "商城周边",
                        children: [{ title: "公司文化", path: "/a" },
                        { title: "公司简介", path: "/b" },
                        { title: "招聘", path: "/c" }
                        ]
                    },
                    {
                        title: "加入我们",
                        children: [{ title: "公司文化", path: "/a" },
                        { title: "公司简介", path: "/b" },
                        { title: "招聘", path: "/c" }
                        ]
                    },
                ]
            }
        },

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style scoped>
</style>