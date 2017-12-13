<template>
  <div class="h5__wrapper">
    <router-link :to="{name: 'HelloEggplant'}" tag="span">返回</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  @import '../styles/var';

  .h5__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 100%;
    margin: 0 auto;
    font-size: 32*@rem;
    background: @bg-color;
    span {
      width: 200*@rem;
      height: 120*@rem;
      line-height: 120*@rem;
      text-align: center;
      border-radius: 10px;
      background: #ebc791;
    }
  }
</style>
