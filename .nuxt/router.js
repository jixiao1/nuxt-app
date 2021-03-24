import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _770cddb8 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _4c77fb84 = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _2e0b8898 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _182d50f8 = () => interopDefault(import('..\\pages\\Mine.vue' /* webpackChunkName: "pages/Mine" */))
const _2b07257a = () => interopDefault(import('..\\pages\\product.vue' /* webpackChunkName: "pages/product" */))
const _83921c70 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _f30e896e = () => interopDefault(import('..\\pages\\product\\cate.vue' /* webpackChunkName: "pages/product/cate" */))
const _58989dd0 = () => interopDefault(import('..\\pages\\product\\list.vue' /* webpackChunkName: "pages/product/list" */))
const _2ce6c630 = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _1f52989d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _19137c87 = () => interopDefault(import('..\\pages\\_category\\menu.vue' /* webpackChunkName: "pages/_category/menu" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _770cddb8,
    name: "About"
  }, {
    path: "/Home",
    component: _4c77fb84,
    name: "Home"
  }, {
    path: "/login",
    component: _2e0b8898,
    name: "login"
  }, {
    path: "/Mine",
    component: _182d50f8,
    name: "Mine"
  }, {
    path: "/product",
    component: _2b07257a,
    children: [{
      path: "",
      component: _83921c70,
      name: "product"
    }, {
      path: "cate",
      component: _f30e896e,
      name: "product-cate"
    }, {
      path: "list",
      component: _58989dd0,
      name: "product-list"
    }, {
      path: ":id",
      component: _2ce6c630,
      name: "product-id"
    }]
  }, {
    path: "/",
    component: _1f52989d,
    name: "index"
  }, {
    path: "/:category/menu",
    component: _19137c87,
    name: "category-menu"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
