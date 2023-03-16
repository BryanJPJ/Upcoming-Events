import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/AuthStorage'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView 
    },
    {
      path: "/about",
      name: "UserView",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {requiresAuth: true}
    }
  ]
})
// router.beforeEach(async (to,from)=> {
//   const auth = useAuthStore();
//   if(to.meta.requiresAuth && !auth.isAuthenticate){
//     return {name: 'about'};
//   }
// })
export default router
