const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/Menu.vue') }],
  },
  {
    path: '/profile',
    component: () => import('layouts/Profile.vue'),
    children: [
      { path: '/', component: () => import('pages/Account.vue') },
      {
        path: '/profile/detail',
        component: () => import('pages/ProfileDetail.vue'),
      },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
    ],
  },
  {
    path: '/home',
    component: () => import('layouts/Home.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
