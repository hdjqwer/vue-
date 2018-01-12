import Vue from 'vue';
import App from './component/App.vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './component/App.vue';
import routerConfig from './router/index.js';
import axios from './js/api-config.js';
Vue.prototype.$api = api;
new Vue ({
    el:'#app',
    render:function(createElement){
        return createElement(App);
    },
    
      router: new VueRouter(routerConfig)

})