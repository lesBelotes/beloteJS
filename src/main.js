import Vue from 'vue'
import WelcomePage from "@/components/WelcomePage";
import vuetify from '@/plugins/vuetify' // path to vuetify export
Vue.config.productionTip = false
import BeloteServices from "@/components/ajax/BeloteServices";

Vue.prototype.$beloteService= new BeloteServices();
window.$beloteService = Vue.prototype.$beloteService;

  new Vue({
      vuetify,
      render: h => h(WelcomePage),
}).$mount('#app')