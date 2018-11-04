<template>
  <div id="detail">
    <section class="avatar">
      <img :src="user.avatar" alt="avatar">
      <h3>{{title}}</h3>
      <p><router-link to="/user">{{user.username}}</router-link> 发布于{{changeTime(createdAt)}}</p>
    </section>
    <section class="article" v-html="markdown"></section>
  </div>
</template>
<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>
