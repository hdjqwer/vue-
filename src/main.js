
import './less/index.less';
import elementui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.use(elementui);
Vue.use(Vuex);
import App from './component/App.vue';
import routerConfig from './router/index.js';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8899';
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