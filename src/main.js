import Vue from 'vue';
import App from './App';
import router from './router';
import VueGoodTable from 'vue-good-table';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-good-table/dist/vue-good-table.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueGoodTable);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
