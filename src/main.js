import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@popperjs/core'
// 
createApp(App).use(router).mount('#app')
