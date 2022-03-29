import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router/index'
import ElementPlus from 'element-plus'
import './styles/index.scss'
import 'element-plus/dist/index.css'
import './styles/theme.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.mount('#app')

// const a = 5
// console.log(4 < a < 2, '------------')
// console.log(a == 1 || 2 || 3)
