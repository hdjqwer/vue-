import HomeComponent from '../component/home/Home.vue';
import LoginComponent from '../component/login/Login.vue';
import RegisterComponent from '../component/register.vue';
export default {
    router: [
        {path:"/",redirect: "/home"},
        {name:"h",path:"/home",component:HomeComponent},
        {name:"1",path:"/login",component:LoginComponent},
        {name:"r",path:"/register",component:RegisterComponent},
    ]
}