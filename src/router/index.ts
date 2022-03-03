import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from '../store/router'

export default createRouter({
  history: createWebHashHistory(),
  routes
})
