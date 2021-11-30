import { createStore } from 'vuex'
import * as ProfessorsApi from '@/services/ProfessorsApi'

const store = createStore({
  modules: {}
})

store['$professorsApi'] = ProfessorsApi
export default store
