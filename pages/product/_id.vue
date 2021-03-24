<template>
<div class="page" id="product-detail">
  <h1>产品详情</h1>
</div>
</template>

<script>
export default {
  validate({params}){
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>