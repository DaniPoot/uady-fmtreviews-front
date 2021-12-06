import { createStore } from 'vuex'
import general from './general'
import professors from './professors'
import courses from './courses'
import * as ProfessorsApi from '@/services/ProfessorsApi'
import * as CoursesApi from '@/services/CoursesApi'

const store = createStore({
  modules: {
    professors,
    courses,
    general
  }
})

store['$professorsApi'] = ProfessorsApi
store['$coursesApi'] = CoursesApi

export default store
