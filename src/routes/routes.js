const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import('@/layouts/main.vue')
  },
  {
    path: '/teachers',
    name: 'teachers',
    component: () =>
      import('@/layouts/listTeacher.vue')
  },
  {
    path: '/teachers/:id',
    name: 'teacherDetail',
    component: () =>
      import('@/layouts/teacherDetail.vue')
  },
  {
    path: '/subjects',
    name: 'subjects',
    component: () =>
      import('@/layouts/listSubject.vue')
  }
]

export default routes
