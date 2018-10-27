<template>
  <header>
    <h1>Let's share</h1>
    <p>精品博客汇聚</p>
    <div class="bts">
      <el-button>立即登录</el-button>
      <el-button>注册账号</el-button>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../assets/base.less';
  #header{
    padding: 0 12% 30px 12%;
    background: @bgColor;
    display: grid;
    justify-items: center;

    h1{
      color: #fff;
      font-size: 40px;
      margin: 60px 0 0;
      text-transform: uppercase;
    }

    p{
      margin: 15px 0 0;
      color: #fff;
    }

    button{
      margin: 40px 5px 0;
    }
  }
</style>
