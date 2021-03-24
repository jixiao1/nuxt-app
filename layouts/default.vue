<template>
<div id="root">
  <header class="header">
    <div class="logo"><img src="../assets/logo.jpeg" alt=""/></div>
    <div class="logo"><img src="/logo2.jpeg" alt=""/></div>
    <div class="title"><h1>千锋教育</h1></div>
  </header>
  <nav class="nav">
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/product">产品</nuxt-link>
    <nuxt-link to="/about">关于</nuxt-link>
  </nav>
  <div class="content">
    <nuxt/>
  </div>
</div>
</template>

<script>
import '../assets/style.css'
export default {
  data(){
    return {

    }
  }
}
</script>


<style scoped>
#root{
  width: 980px;
  margin: 0 auto;
  background: #fff;
  min-height: 100%;
  position: relative;
}
.header{
  width: 100%;
  height: 80px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background: palegreen;
}
.logo{
  padding: 0 20px;
  width: 80px;
  height: 80px;
}
.logo img{
  width: 80px;
  height: 80px;
}
.title h1{
  line-height: 80px;
}
.nav{
  width: 100%;
  height: 40px;
  background: red;
  display: flex;
  position: absolute;
  top: 80px;
  left: 0;
}
.nav a{
  line-height: 40px;
  width: 100px;
  text-align: center;
}
.content{
  width: 100%;
  padding-top: 120px;
}

</style>