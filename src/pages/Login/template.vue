<template>
  <div id="login">
    <h4>用户名</h4>
    <el-input  placeholder="用户名"></el-input>
    <h4>密码</h4>
    <el-input  placeholder="密码"></el-input>
    <el-button size="small">立即登录</el-button>
    <p class="notice">没有账号 ? <router-link to="/register">注册新用户</router-link></p>
  </div>
</template>
<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>
