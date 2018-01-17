
import Login from '../component/login/Login.vue';
import Admin from '../component/admin/Admin.vue';
// admin的子组件
import ctList from '../component/admin/goods/content/List.vue';
import ctEdit from '../component/admin/goods/content/Edit.vue';
import cgList from '../component/admin/goods/category/List.vue';
import cgEdit from '../component/admin/goods/category/Edit.vue';
let adminChildren = [
    {name:"adminctList",path:"goods/content/list",component:ctList},
    {name:"adminctEdit",path:"goods/content/edit/:id",component:ctEdit},
    {name:"adminctAdd",path:"goods/content/add",component:ctEdit},
    {name:"admincgList",path:"goods/category/list",component:cgList},
    {name:"admincgEdit",path:"goods/category/edit/:id",component:cgEdit},
    {name:"admincgAdd",path:"goods/category/add",component:cgEdit}
];
// 导出
export default {
    routes: [
        {name:"login",path:"/login",component:Login},
        { name: 'admin', path: '/admin', component: Admin, children: adminChildren },
        {path:"/",redirect: "/admin"}
    ]
}