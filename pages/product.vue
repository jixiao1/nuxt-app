<template>
<div class="page" id="product">
  <h1>产品界面</h1>
  <h3>{{$store.state.value}}</h3>
  <nav>
    <nuxt-link to="/product/cate">分类</nuxt-link>
    <nuxt-link to="/product/list">列表</nuxt-link>
  </nav>
  <nuxt-child></nuxt-child>
</div>
</template>

<script>
export default {
  transition: 'product'
}
</script>

<style>

</style>