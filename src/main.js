import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Markdown from 'vue3-markdown-it'
import { createPinia } from 'pinia'


const app = createApp(App)

app.use(router)

app.use(Markdown);

app.use(createPinia())

app.mount('#app')

