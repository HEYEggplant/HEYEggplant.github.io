<style lang="less" scoped>
  @import '../styles/base.less';

  .welcome__wrapper {
    header {
      font-family: 'Pattaya,sans-serif' !important;
    }
    section {
      position: relative;
      width: 80%;
      height: 70%;
      margin: 0 auto;
      border-radius: 10px;
      border: 3px solid #000;
      aside {
        position: absolute;
        top: 0;
        right: 0;
        height: 70%;
        ul {
          display: flex;
          width: 100px;
          height: 100%;
          flex-direction: column;
          justify-content: space-between;
          li {
            height: 100%;
            // line-height: 100%;
            padding: 20px 0;
            margin-bottom: 10px;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            text-align: center;
            background: #eee;
          }
        }
      }
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
    <section>
      待更新中
      点击进入子页面
      <aside>
        <ul>
          <router-link :to="{name: 'Lodash'}" tag="li">lodash</router-link>
          <router-link :to="{name: 'H5'}" tag="li">H5</router-link>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </aside>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

