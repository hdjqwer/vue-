<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>   
         <div class="butBox">
                <el-button size="mini"><i class="el-icon-plus"></i><span>新增</span></el-button>
                <el-button size="mini"><i class="el-icon-check"></i><span>全选</span></el-button>   
                <el-button size="mini"><i class="el-icon-delete"></i><span>删除</span></el-button>
                <el-input class="headsearch" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="input" maxlength="10">
                </el-input>
         </div>
        <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" >
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="标题" width="240">
                <template slot-scope="scope">{{ scope.row.title }}</template>
            </el-table-column>
            <el-table-column prop="categoryname" label="所属类别" width="120">
            </el-table-column>
            <el-table-column prop="stock_quantity" label="库存" width="120">
            </el-table-column>
            <el-table-column prop="market_price" label="市场价" width="120">
            </el-table-column>
            <el-table-column prop="sell_price" label="销售价" width="120">
            </el-table-column>
            <el-table-column prop="name" label="状态" width="120">
                <template slot-scope="scope">
                    <i class="el-icon-picture"></i>
                    <i class="el-icon-upload"></i>
                    <i class="el-icon-star-on"></i>
                </template>
            </el-table-column>
            <el-table-column  label="日期" width="120" >
                <template slot-scope="scope">
                    <router-link to="{name:'getGoodList',params:{id:10}}">修改</router-link>
                </template>
            </el-table-column>
        </el-table>
    
    </div>
          
           
</template>
<script>
    export default {
        data() {
          return {
            tableData3: [
            {
        id: 103,        
        title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
        is_top: 1,
        is_hot: 1,
        is_slide: 1,      
        categoryname: "男装",
        img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
        imgurl:"http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
        goods_no: "NZ0000000002",
        stock_quantity: 200,
        market_price: 1000,
        sell_price: 800   
      }, {
        id: 103,        
        title: "骆驼男装2017秋季新款运动休闲纯色夹克青年宽松长袖针织开衫卫",
        is_top: 1,
        is_hot: 1,
        is_slide: 1,      
        categoryname: "男装",
        img_url: "/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
        imgurl:"http://139.199.192.48:6060/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg",
        goods_no: "NZ0000000002",
        stock_quantity: 200,
        market_price: 1000,
        sell_price: 800   
      }
        ],
        gsListQuery: {
             pageIndex: 1,
             pageSize: 10,
             searchvalue: ''
             }
         }
     },
    
        methods: {
             getGoodList(){
                 this.$http.get(this.$api.gsList,{params:this.gsListQuery}).then(res=>{
                     this.tableData3 = res.data.message;
                 });
             }
        
      },
      created () {
          this.getGoodList();
      }
    }
</script>
<style scoped lang="less">
    .butBox {
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-radius: 8px;
        margin-top: 5px;
       
    }
    .headsearch{
            width: 150px;
            float: right;
        }
</style>

