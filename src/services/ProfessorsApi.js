import axios from '@/config/axios.js'

export async function getAllProfessors () {
  return await axios.get('/professors/')
}

export async function getProfessorById ({ id }) {
  return await axios.get(`/professors/${id}`)
}

export async function getProfessorImageById ({ id }) {
  return await axios.get(`/professors/${id}/profile-image`)
}

export async function getProfessorsCharacteristics () {
  return await axios.get('/professors/characteristics')
}

export async function createProfessorReview ({ id, professor }) {
  return await axios.post(`/professors/${id}/reviews`, professor)
}

export async function getProfessorReviews ({ id }) {
  return await axios.get(`/professors/${id}/reviews`)
}

export async function getStudentSatisfactionParameter () {
  return await axios.get('/professors/student-satisfaction-parameters')
}