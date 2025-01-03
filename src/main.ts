import './assets/main.css'
import 'element-plus/dist/index.css'
import '@csstools/normalize.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
