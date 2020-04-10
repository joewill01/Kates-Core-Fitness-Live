import axios from 'axios';
import Vue from 'vue';
import VModal from 'vue-js-modal';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

Vue.config.productionTip = false;

Vue.prototype.$apiURL = 'http://192.168.1.64';
// like https://api.example.com

Vue.mixin({
  methods: {
    logout_user() {
      const jwt = localStorage.getItem('jwt');

      axios({ method: 'post', url: `${this.$apiURL}/auth/logout`, headers: { Authorization: `Bearer ${jwt}` } })
        .then(() => {
          localStorage.removeItem('jwt');
          localStorage.removeItem('user');
          this.$router.push('login');
        }).catch(() => {
          localStorage.removeItem('jwt');
          localStorage.removeItem('user');
          this.$router.push('login');
        });
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
