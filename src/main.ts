import { createApp } from 'vue'
import App from './App.vue'
import Ximuli from './components/Ximuli.vue'
import Ximuli2 from './components/Ximuli2.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Ximuli },
    { path: '/xxx', component: Ximuli2 },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
