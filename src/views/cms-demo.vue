<template>
  <div class="cms__wrapper wap__wrapper">
    <header>
      <img src="../assets/qhfax_logo.png">
      <h1>流程审批系统</h1>
    </header>
    <div class="auth__wrapper">
      <form>
        <label for="male">用户名</label>
        <input type="text" name="sex" id="male" />
        <br />
        <label for="female">密码</label>
        <input type="password" name="sex" id="female" />
      </form>
      <router-link :to="{name: 'CmsIndex'}" tag="button">登陆</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
  @import '../styles/base';

  .cms__wrapper {
    padding: 50% 60*@rem 0;
    header {
      text-align: center;
      h1 {
        font-size: 42*@rem;
        font-weight: normal;
      }
    }
    .auth__wrapper {
      text-align: center;
      padding: 60*@rem 42*@rem;
      border: 1px solid #f98b1b;
      button {
        margin-top: 30*@rem;
      }
    }
  }
</style>


