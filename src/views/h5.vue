<template>
  <div class="h5__wrapper">
    <router-link :to="{name: 'HelloEggplant'}" tag="span">返回</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    baz () { // 当前调用栈是：baz 因此，当前调用位置是全局作用域
      console.log('baz')
      this.bar() // bar的调用位置
    },
    bar () { // 当前调用栈是 baz -> bar     // 因此，当前调用位置在 baz 中
      console.log('bar')
      this.foo() // <-- foo 的调用位置
    },
    foo () {     // 当前调用栈是 baz -> bar -> foo     // 因此，当前调用位置在 bar中
      debugger
      console.log('foo')
    }
  },
  created () {
    this.baz()
  }
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
    background: #fff;
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
