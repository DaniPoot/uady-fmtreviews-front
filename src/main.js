import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './routes/index'
import 'virtual:windi.css'
import.meta.env.VITE_API_URL
const app = createApp(App)
app.use(store)
  .use(router)
  .mount('#app')
