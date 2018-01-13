import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './component/App.vue';
import routerConfig from './router/index.js';
import axios from 'axios';
axios.defaults.baseURL = 'http://157.122.54.189:9095';
Vue.prototype.$http =axios;

import api from './js/api-config';
Vue.prototype.$api = api;
new Vue ({
    el:'#app',
    render:function(createElement){
        return createElement(App);
    },
    
      router: new VueRouter(routerConfig)

})