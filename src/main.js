import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.config.productionTip = false; // 不显示启动时生成的生产提示
Vue.config.devtools = true;

const routes = [{ 
    path: '/', 
    component: ()=>import('@/pages/home/home.vue')
}, {
    path: '/index', 
    component: ()=>import('@/pages/home/home.vue')
}];

const router = new VueRouter({
    mode: 'hash',
    routes
});

Vue.use(VueI18n);
Vue.use(VueRouter);

new Vue({
    el: '#App',
    router,
    template: '<App/>',
    components: {
        App
    }
});
