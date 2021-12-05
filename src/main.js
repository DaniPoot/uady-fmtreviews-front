import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './routes/index'
import utils from './mixins/utils'
import 'virtual:windi.css'

const app = createApp(App)
app.use(store).use(router).mixin(utils).mount('#app')
