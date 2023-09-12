import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import 'uno.css'

const app = createApp(App)
app.use(router)
app.use(createHead())
app.use(createPinia())
app.mount('#app')
