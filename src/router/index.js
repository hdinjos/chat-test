import { createMemoryHistory, createRouter } from 'vue-router'

import App from '../App.vue'

const routes = [
  { path: '/', component: App },
//   { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})