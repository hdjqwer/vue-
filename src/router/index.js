
import Login from '../component/login/Login.vue';
import Register from '../component/register.vue';
export default {
    router: [
        {name:"login",path:"/login",component:Login},
        {name:"register",path:"/register",component:Register},
    ]
}