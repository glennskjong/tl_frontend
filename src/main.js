import Vue from 'vue';
import App from './App';
import router from './router';
import VueGoodTable from 'vue-good-table';

Vue.config.productionTip = false;

Vue.use(VueGoodTable);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
