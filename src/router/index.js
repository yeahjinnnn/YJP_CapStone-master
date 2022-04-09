import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('@/components/user/Signup.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/user/Login.vue')
  },
  {
    path: '/slogin',
    name: 'sLogin',
    component: () => import('@/components/user/sLogin.vue')
  },
  {
    path: '/memberData',
    name: 'MemberData',
    component: () => import('@/components/user/MemberData.vue')
  },
  {
    path: '/horby',
    name: 'Horby',
    component: () => import('@/components/user/Horby.vue')
  },

    //////////////////////////////////////////////////////////////////

  {
    path: '/board',
    name: 'Board',
    component: () => import('@/components/board/Board.vue')
  },
  {
    path: '/read',
    name: 'Read',
    component: () => import('@/components/board/Read.vue')
  },
  {
    path: '/create/:contentId?',
    name: 'Create',
    component: () => import('@/components/board/Create.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('@/components/board/Create.vue')
  },
  {
    path: '/view/:writer_code',
    name: 'View',
    component: () => import('@/components/board/View.vue')
  },
  {
    path: '/update/:writer_code',
    name: 'Update',
    component: () => import('@/components/board/Update.vue')
  },

    //////////////////////////////////////////////////////////////////
  {
    path: '/sellerSignup',
    name: 'SellerSignup',
    component: () => import('@/components/product/SellerSignup.vue')
  },
  {
    path: '/userList',
    name: 'UserList',
    component: () => import('@/components/product/UserList.vue')
  },
  {
    path: '/ProductMain',
    name: 'ProductMain',
    component: () => import('@/components/product/ProductMain.vue')
  },
  {
    path: '/MyProductList',
    name: 'MyProductList',
    component: () => import('@/components/product/MyProductList.vue')
  },
  {
    path: '/MyProductDetail/:menuid',
    name: 'MyProductDetail',
    component: () => import('@/components/product/MyProductDetail.vue'),
    props: true
  },
  {
    path: '/MyProductEdit',
    name: 'MyProductEdit',
    component: () => import('@/components/product/MyProductEdit.vue'),
    props: true,
  },
  {
    path: '/ProductList',
    name: 'ProductList',
    component: () => import('@/components/product/ProductList.vue')
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import('@/components/product/Registration.vue'),
    props: true
  },
  {
    path: '/ProductDetail/:menuid',
    name: 'productDetail',
    component: () => import('@/components/product/ProductDetail.vue'),
    props: true
  },

    /////////////////////////////////////////////////////////
  {
    path: '/itemBuy',
    name: 'ItemBuy',
    component: () => import('@/components/cart/ItemBuy/BuyList.vue')
  },
  {
    path: '/itemBuy/buyNow',
    name: 'BuyNow',
    component: () => import('@/components/cart/ItemBuy/BuyNow.vue')
  },
  {
    path: '/itemBuy/buyComplete',
    name: 'BuyComplete',
    component: () => import('@/components/cart/ItemBuy/BuyComplete.vue')
  },
  {
    path: '/itemShare',
    name: 'ShareList',
    component: () => import('@/components/cart/ItemShare/ShareList.vue')
  },
  {
    path: '/itemShare/shareNow',
    name: 'ShareNow',
    component: () => import('@/components/cart/ItemShare/ShareNow.vue')
  },
  {
    path: '/itemBuy/shareComplete',
    name: 'shareComplete',
    component: () => import('@/components/cart/ItemShare/ShareComplete.vue')
  },
  {
    path: '/infoter',
    name: 'InfoterList',
    component: () => import('@/components/cart/Infoter/InfoterList.vue')
  },
  {
    path: '/infoter/infoterNow',
    name: 'InfoterNow',
    component: () => import('@/components/cart/Infoter/InfoterNow.vue')
  },
  {
    path: '/infoter/infoterComplete',
    name: 'InfoterComplete',
    component: () => import('@/components/cart/Infoter/InfoterNow.vue')
  },
  {
    path: '/cart',
    name: 'CartList',
    component: () => import('@/components/cart/Cart/CartList.vue')
  },
  {
    path: '/cart/buy',
    name: 'BuyCart',
    component: () => import('@/components/cart/Cart/BuyCart.vue')
  },
  {
    path: '/cart/share',
    name: 'ShareCart',
    component: () => import('@/components/cart/Cart/ShareCart.vue')
  },
  {
    path: '/cart/reservation',
    name: 'ReservationCart',
    component: () => import('@/components/cart/Cart/ReservationCart.vue')
  },


]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
