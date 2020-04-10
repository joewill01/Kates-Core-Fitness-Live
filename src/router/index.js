import Vue from 'vue';
import Router from 'vue-router';
import Admin from '../views/Admin.vue';
import BookStream from '../views/BookStream.vue';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import WatchStream from '../views/WatchStream.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { guest: true, noHeader: true },
    }, {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { guest: true, noHeader: true },
    }, {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
    }, {
      path: '/book-stream',
      name: 'book-stream',
      component: BookStream,
      meta: { requiresAuth: true },
    }, {
      path: '/watch-stream',
      name: 'watch-stream',
      component: WatchStream,
      meta: { requiresAuth: true },
    }, {
      path: '/admin',
      name: 'admin',
      component: Admin,
      meta: { requiresAuth: true, is_admin: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      });
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.is_admin === true) {
          next();
        } else {
          next({ name: 'home' });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next();
    } else {
      next({ name: 'home' });
    }
  } else {
    next();
  }
});

export default router;
