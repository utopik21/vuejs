import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import SuppliersList from "./components/SuppliersList";
import SuppliersMap from "./components/SuppliersMap";
import Supplier from "./components/Supplier";


import * as VueGoogleMaps from 'vue2-google-maps'
import './registerServiceWorker'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAG7lTkCP8wsowucSS_YzzEy4PS4HnNejo',
    }
})



Vue.use(VueRouter);

const routes = [
    {path: '/suppliers', component: SuppliersList},
    {path: '/map', component: SuppliersMap},
    {path: '/supplier', component: Supplier}

];

const router = new VueRouter({
    routes

});

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    render: h => h(App),
}).$mount('#app');

