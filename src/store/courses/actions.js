export const getAllCourses = async function ({ commit }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const courses = this.$coursesApi.getAllCurses()
    commit('general/setIsLoading', false, { root: true })
    return courses
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const getAllResourceTypes = async function ({ commit }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const resourcetypes = this.$coursesApi.getAllResourceTypes()
    commit('general/setIsLoading', false, { root: true })
    commit('setResourceTypes', resourcetypes)
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const createResourceForCourse = async function ({ commit }, { id, resource }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const resources = this.$coursesApi.createResourceForCourse({ id, resource })
    commit('general/setIsLoading', false, { root: true })
    return resources
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const getAllResourcesByCourse = async function ({ commit }, { id }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const resource = this.$coursesApi.getAllResourcesByCourse({ id })
    commit('general/setIsLoading', false, { root: true })
    return resource
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}