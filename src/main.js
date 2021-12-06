import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './routes/index'
import 'virtual:windi.css'
import.meta.env.VITE_API_URL
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faPhone)
library.add(faPlus)
const app = createApp(App)
app.use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
