const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [{ path: '', component: () => import('pages/Menu/Index.vue') }],
  },
  {
    path: '/orders',
    component: () => import('layouts/Order.vue'),
    children: [{ path: '', component: () => import('pages/Orders/Index.vue') }],
  },
  {
    path: '/promo',
    component: () => import('layouts/Promotion.vue'),
    children: [
      { path: '', component: () => import('pages/Promotions/Index.vue') },
    ],
  },
  {
    path: '/profile',
    component: () => import('layouts/Profile.vue'),
    children: [
      { path: '/', component: () => import('pages/Account/Index.vue') },
      {
        path: '/profile/detail',
        component: () => import('pages/Account/ProfileDetail.vue'),
      },
      {
        path: '/profile/change-number',
        component: () => import('pages/Account/ChangeNumber.vue'),
      },
      {
        path: '/profile/credits',
        component: () => import('pages/Account/Credits.vue'),
      },
      {
        path: '/profile/change-password',
        component: () => import('pages/Account/ChangePassword.vue'),
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
