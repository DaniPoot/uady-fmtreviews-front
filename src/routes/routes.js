const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/components/HelloWorld.vue')
  }
]

export default routes
