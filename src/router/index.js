
import LoginComponent from '../component/login/Login.vue';
import RegisterComponent from '../component/register.vue';
export default {
    router: [
        {name:"1",path:"/login",component:LoginComponent},
        {name:"r",path:"/register",component:RegisterComponent},
    ]
}