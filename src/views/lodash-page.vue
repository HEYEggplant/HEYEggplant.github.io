<template>
  <div class="lodash-page">
    <h1>Lodash运行结果</h1>
    <LodashWrapper
      :functionName="`slice`"
      :argumentsCount="3"
      v-on:getArguments="slice"
      :returnValue="returnValue"></LodashWrapper>
  </div>
</template>

<script>
  import LodashWrapper from '@/components/lodash'

  export default {
    name: 'app',
    data () {
      return {
        functionName: '',
        returnValue: undefined
      }
    },
    components: {
      LodashWrapper
    },
    methods: {
      slice (data) {
        let array = JSON.parse(data[0])
        let start = data[1]
        let end = data[2]
        let length = array == null ? 0 : array.length // 判断传入数组是否为null
        if (!length) {
          return []
        } // 为空返回
        start = start == null ? 0 : start // 判断传入参数start是否为null
        end = end === undefined ? length : end // 判断传入参数end是否定义 未定义则末尾至数组末尾
        if (start < 0) {
          start = -start > length ? 0 : start + length
        } // 判断start从末尾开始
        if (end < 0) {
          end += length
        } // 判断end是否从末尾开始计数
        length = start > end ? 0 : ((end - start) >>> 0) // 开始大于介绍 从0开始 否则返回数组长度做处理
        start >>>= 0 // 给其实位置做不为空处理
        let index = -1
        const result = new Array(length)
        while (++index < length) {
          result[index] = array[index + start]
        }
        this.returnValue = result
      }
    }
  }
</script>

<style lang="less">
  .lodash-page {
    & > h1 {
      text-align: center;
    }
  }
</style>

