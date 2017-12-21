<style lang="less" scoped>
  @import '../styles/base.less';

  .welcome__wrapper {
    height: 100%;
    header {
      text-align: center;
      margin: 60*@rem 0 120*@rem;
      font-family: 'Pattaya,sans-serif' !important;
    }
    section {
      display: flex;
      align-items: center;
      position: relative;
      width: 80%;
      height: 70%;
      margin: 0 auto;
      border-radius: 10px;
      border: 3px solid #000;
        div {
          display: block;
          margin: 0 auto;
          border-radius: 10px;
          font-size: 18px;
          padding: 60*@rem 90*@rem;
          background: #eee;
        }
      // aside {
      //   position: absolute;
      //   top: 0;
      //   right: 0;
      //   height: 70%;
      //   ul {
      //     display: flex;
      //     width: 100px;
      //     height: 100%;
      //     flex-direction: column;
      //     justify-content: space-between;
      //     li {
      //       // height: 100%;
      //       // line-height: 100%;
      //       padding: 20px 0;
      //       margin-bottom: 10px;
      //       border-top-left-radius: 10px;
      //       border-bottom-left-radius: 10px;
      //       text-align: center;
      //       background: #eee;
      //     }
      //   }
      // }
    }
  }
</style>


<template>
  <div class="welcome__wrapper page">
    <header>
      <h1>
        Welcome to HEYEggplant's Blog !
        <p>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qiezi"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qiezi"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qiezi"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qiezi"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qiezi"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qiezi"></use>
          </svg>
        </p>
      </h1>
    </header>
    <section>
      <div>go to
        <a href="https://github.com/heyeggplant/HEYEggplant.github.io/issues">blog</a>
      </div>
      <!-- <aside>
        <ul>
          <router-link :to="{name: 'Lodash'}" tag="li">lodash</router-link>
          <router-link :to="{name: 'Grid'}" tag="li">Grid</router-link>
          <li>5</li>
        </ul>
      </aside> -->
    </section>
  </div>
</template>

<script>
export default {

}
</script>

