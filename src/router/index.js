import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProductByCategory from '@/components/ProductByCategory.vue'
import AboutComponent from '@/components/AboutComponent.vue'  
import ContactComponent   from '@/components/ContactComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/products',
      name: 'Products',
      component: ProductByCategory
    },
    {
      path: '/about',
      name: 'About',    
      component: AboutComponent
    },
    {
      path: '/contact',
      name: 'Contact',  
      component: ContactComponent
    }
  ]
})
