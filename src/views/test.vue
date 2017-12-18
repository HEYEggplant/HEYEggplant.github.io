<template>

</template>

<script>
export default {
  data () {
    return {}
  },
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
      console.log('foo')
    }
  },
  created () {
    this.baz()
    // let MyModules = (function Manager() {
    //   let modules = {}
    //   function define(name, deps, impl) {
    //     for(let i = 0; i < deps.length; i++) {
    //       deps[i] = modules[deps[i]]
    //     }
    //     modules[name] = impl.apply(impl, deps)
    //   }
    //   function get(name) {
    //     return modules[name]
    //   }
    //   return {
    //     define,
    //     get
    //   }
    // })()

    // MyModules.define('bar', [], () => {
    //   function hello(who) {
    //     return `Let me introduce${who}`
    //   }
    //   return {
    //     hello
    //   }
    // })
    // MyModules.define('foo', ['bar'], bar => {
    //   let hungry = 'hippo'
    //   function awesome() {
    //     console.log(bar.hello(hungry).toUpperCase)
    //   }
    //   return {
    //     awesome
    //   }
    // })
  }
}
</script>

<style lang="less" scoped>

</style>


