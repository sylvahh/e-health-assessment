import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import HighchartsVue from 'highcharts-vue'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register'
import router from './router'

const app = createApp(App)
registerSW({
    immediate: true,
    onOfflineReady() {
    console.log('offline mode')
} })

app.use(createPinia())
app.use(router)
app.use(HighchartsVue)
app.mount('#app')
