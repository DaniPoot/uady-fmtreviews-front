export const getAllProfessors = async function ({ commit }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const professors = this.$professorsApi.getAllProfessors()
    commit('general/setIsLoading', false, { root: true })
    return professors
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const getProfessorById = async function ({ commit }, id) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const professor = this.$professorsApi.getProfessorById({ id })
    commit('general/setIsLoading', false, { root: true })
    return professor
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const getProfessorImageById = async function ({ commit }, id) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const professorImage = this.$professorsApi.getProfessorImageById({ id })
    commit('general/setIsLoading', false, { root: true })
    return professorImage
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}

export const getProfessorsCharacteristics = function ({ commit }) {
 try {
    commit('general/setIsLoading', true, { root: true })
    const characteristics = this.$professorsApi.getProfessorsCharacteristics()
    commit('general/setIsLoading', false, { root: true })
    commit('setProfessorCharacteristics', characteristics)
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}
export const createProfessorReview = function ({ commit }, { id, professor }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const professorWithRevies = this.$professorsApi.createProfessorReview({ id, professor })
    commit('general/setIsLoading', false, { root: true })
    return professorWithRevies
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}
export const getProfessorReviews = function ({ commit }, id) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const reviews = this.$professorsApi.getProfessorReviews({ id })
    commit('general/setIsLoading', false, { root: true })
    return reviews
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}
export const getStudentSatisfactionParameter = function ({ commit }) {
  try {
    commit('general/setIsLoading', true, { root: true })
    const characteristics = this.$professorsApi.getStudentSatisfactionParameter()
    commit('general/setIsLoading', false, { root: true })
    commit('setStudentSatisfactionParameters', characteristics)
  } catch (error) {
    commit('general/setErrorMsg', error, { root: true })
  } finally {
    commit('general/setIsLoading', false, { root: true })
  }
}