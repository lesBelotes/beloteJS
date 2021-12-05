import Vue from 'vue'
import VueRouter from 'vue-router'
//import VueResource from 'vue-resource'
Vue.use(VueRouter)
//Vue.use(VueResource)
import HomePage from "@/components/HomePage";
const publicPath= "";
const routers = [
{ path: publicPath+'/', component: HomePage },
{ path: publicPath+'/home', component: HomePage },
]

const router = new VueRouter({
  routes: routers
});
export default router;