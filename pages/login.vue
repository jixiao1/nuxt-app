<template>
<div class="page" id="login">
  <div class="form">
    <input type="text" placeholder="用户名"/>
    <input type="text" placeholder="密码"/>
    <button>登录</button>
  </div>
</div>
</template>

<script>
export default {
  layout: 'panel',
  middleware: ['index']
}
</script>

<style>
.form{
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-around;
}
</style>