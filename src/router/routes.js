import Index from '../pages/index/index.vue'
import Register from '../pages/register/Register.vue'
import Login from "../pages/login";
import videoShow from "../components/VideoShow";

export default [
  {
    path: '/',
    component: Index,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {notheader: true, notFooter: true,keepAlive: false}
  }, {
    path: '/login',
    component: Login,
    meta:{
      keepAlive: false
    }
  },{
    path: '/videoShow',
    component: videoShow,
    meta:{
      keepAlive: false
    }
  }
]
