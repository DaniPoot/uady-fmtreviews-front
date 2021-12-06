import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './routes/index'
import utils from './mixins/utils'
import 'virtual:windi.css'
import.meta.env.VITE_API_URL
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faPhone)
library.add(faPlus)
library.add(faArrowLeft)
const app = createApp(App)
app.use(store).use(router).mixin(utils).component('font-awesome-icon', FontAwesomeIcon).mount('#app')