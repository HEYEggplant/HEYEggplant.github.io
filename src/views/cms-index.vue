<template>
  <div class="cms-index__wrapper wap__wrapper">
    <header>标的流程审批系统</header>
    <div class="content__wrapper">
      <router-link :to="{name: 'CmsDetail'}" tag="span">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qiezi"></use>
        </svg>
        <p>审批管理</p>
      </router-link>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qiezi"></use>
        </svg>
        <p>车贷管理</p>
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qiezi"></use>
        </svg>
        <p>房产贷管理</p>
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qiezi"></use>
        </svg>
        <p>合作方管理</p>
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qiezi"></use>
        </svg>
        <p>资料管理</p>
      </span>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-qiezi"></use>
        </svg>
        <p>工作台</p>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  components: {}
}
</script>

<style lang="less" scoped>
  @import '../styles/base';

  .cms-index__wrapper {
    background: #ddd;
    header {
      text-align: center;
    }
    .content__wrapper {
      display: flex;
      flex-wrap: wrap;
      color: #f98b1b;
      span {
        width: 33.3%;
        text-align: center;
        &:first-child, &:nth-child(2), &:nth-child(4), &:nth-child(5) {
          border-right: 1px solid #f98b1b;
        }
        &:first-child, &:nth-child(2), &:nth-child(3) {
          border-bottom: 1px solid #f98b1b;
        }
      }
    }
  }

</style>
