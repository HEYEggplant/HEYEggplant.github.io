<template>
<router-link :to="{name: 'HelloEggplant'}" tag="div">
  <div class="container">
    <header>h</header>
    <div class="menu">m</div>
    <div class="content">c</div>
    <footer>f</footer>
  </div>
  <div class="wrapper">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
  </div>
</router-link>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 50px 350px 50px;
    grid-template-areas:
    "m m h h h h h h h h h ."
    "m m c c c c c c c c c c"
    "f f f f f f f f f f f .";
    header {
      grid-area: h;
      background: #eee;
    }
    .menu {
      grid-area: m;
      background: #e99;
    }
    .content {
      grid-area: c;
      background: #f66;
    }
    footer {
      grid-area: f;
      background: #877;
    }
  }
  @media screen and (min-width: 768px) {
    .container {
      grid-template-areas:
        "m m m m m m m m m m m m"
        "m m m m m m c c c c c c"
        "f f f f f f f f f f f f";
    }
  }
  @media screen and (min-width: 992px) {
    .container {
      grid-template-areas:
        "m m m m m m h h h h h h"
        "c c c c c c c c c c c c"
        "f f f f f f f f f f f f";
    }
  }
  @media screen and (min-width: 1200px) {
    .container {
      grid-template-areas:
        "h h h h h h h h h h h h"
        "m m c c c c c c c c c c"
        "f f f f f f f f f f f f";
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: 50px 50px 50px;
    grid-template-rows: 50px 50px;
    .item1 {
      grid-column-start: 2;
      grid-column-end: 4;
      background: #a22;
    }
    .item2 {
      grid-column-start: 1;
      grid-column-end: 3;
      // grid-column: 1/3;
      background: #b33;
    }
    .item3 {
      grid-row-start: 1;
      grid-row-end: 4;
      // grid-row: 1 / 4;
      background: #c44;
    }
    .item4 {
      background: #d55;
    }
    .item5 {
      background: #e66;
    }
    .item6 {
      background: #f77;
    }
  }
</style>

