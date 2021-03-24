<template>
<div id="root">
  <div class="logo">
    <img src="../assets/logo.jpeg" alt=""/>
  </div>
  <div class="content">
    <nuxt/>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
#root{
  width: 100%;
  background: #fff;
  min-height: 100%;
  position: relative;
}
.logo{
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
}
.logo img{
  width: 100px;
  height: 100px;
}
.content{
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
}
</style>