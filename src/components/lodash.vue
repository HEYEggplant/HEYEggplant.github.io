<template>
  <section class="lodash__wrapper">
    <div v-text="functionName"></div>
    <div>
      <span v-for="(item, index) of new Array(argumentsCount)"
      :key="item">
        <input v-model="inputValue[index]" type="text"></input>
      </span>
    </div>
    <div @click="getValues">return</div>
    <div v-text="returnValue"></div>
  </section>
</template>

<script>
  export default {
    // name: 'app',
    data () {
      return {
        inputValue: []
      }
    },
    props: {
      functionName: {
        type: String,
        required: true,
        default: ''
      },
      argumentsCount: {
        type: Number,
        required: true,
        default: 0
      },
      returnValue: {
        required: true,
        default: ''
      }
    },
    methods: {
      getValues () {
        this.$emit('getArguments', this.inputValue)
      }
    }
  }
</script>

<style lang="less">
  @import '../styles/var.less';

  .lodash__wrapper {
    display: flex;
    justify-content: space-around;
    div {
      display: flex;
      justify-content: space-around;
      flex-grow: 1;
      margin-right: 20px;
      margin-left: 20px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 10px;
      &:first-child, &:last-child, &:nth-last-child(2) {
        background: @bg-color;
      }
      span {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        text-align: center;
        &:not(:last-child) {
          margin-right: 20px;
        }
        input {
          width: 100%;
          height: 100%;
          padding-left: 5px;
          border: none;
          outline: none;
          border-radius: 5px;
          background: @bg-color;
        }
      }
    }
  }
</style>
