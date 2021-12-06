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
  },
  {
    path: '/subjects/:id',
    name: 'subjectDetail',
    component: () =>
      import('@/layouts/subjectDetail.vue'),
    props: { subject: {} }
  }
]

export default routes
