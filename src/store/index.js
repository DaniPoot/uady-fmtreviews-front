import { createStore } from 'vuex'
import * as ProfessorsApi from '@/services/ProfessorsApi'
import * as CoursesApi from '@/services/CoursesApi'

const store = createStore({
  modules: {}
})

store['$professorsApi'] = ProfessorsApi
store['$coursesApi'] = CoursesApi

export default store
