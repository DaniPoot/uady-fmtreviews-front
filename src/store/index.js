import { createStore } from 'vuex'
import general from './general'
import * as ProfessorsApi from '@/services/ProfessorsApi'
import * as CoursesApi from '@/services/CoursesApi'

const store = createStore({
  modules: {
    general
  }
})

store['$professorsApi'] = ProfessorsApi
store['$coursesApi'] = CoursesApi

export default store
