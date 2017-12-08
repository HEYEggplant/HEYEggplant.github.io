<style lang="less" scoped>
  @import '../styles/base.less';

  .welcome__wrapper {
    header {
      height: 20%;
      font-family: 'Pattaya,sans-serif' !important;
    }
    section {
      width: 100%;
      height: 80%;;
      border: 3px solid #000;
    }
  }
</style>


<template>
  <div class="welcome__wrapper page">
    <header>
      <h1>
        Welcome to HEYEggplant's Blog !
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qiezi"></use>
        </svg>
      </h1>
    </header>
    <router-link :to="{name: 'Lodash'}" tag="section">
      主体 暂存 太丑！！！！
      待更新中
      点击进入子页面
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

