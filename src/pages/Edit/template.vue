<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input
  type="textarea"
  :rows="2" resize="none"></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input
  type="textarea"
  :rows="4" resize="none"></el-input>
    <p class="msg">限30个字</p>
    <p class="show">是否展示到首页 <el-switch  active-color="#13ce66"  inactive-color="#ff4949"></el-switch></p>
    <el-button>确定</el-button>
  </div>
</template>
<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>
