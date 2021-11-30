import axios from '@/config/axios.js'

export async function getAllCurses () {
  return await axios.get('/courses/')
}

export async function getAllResourceTypes () {
  return await axios.get('/courses/recommended-resource-types/')
}

export async function createResourceForCourse ({ id, resource }) {
  return await axios.post(`/courses/${id}/recommended-resources/`, resource)
}

export async function getAllResourcesByCourse ({ id }) {
  return await axios.get(`/courses/${id}/recommended-resources/`)
}