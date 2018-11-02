<template>
  <div id="index">
    <section>
      <div class="item" v-for="blog in blogs">
        <figure class="avatar">
          <router-link :to="`/user/${blog.user.id}`">
            <img :src="blog.user.avatar" alt="">
            <figcaption>{{blog.user.username}}</figcaption>
          </router-link>
        </figure>
        <h3>{{blog.title}} <span>{{blog.createdAt}}天前</span></h3>
        <router-link :to="`/detail/${blog.id}`" class="content"><p>{{blog.description}}</p></router-link>
      </div>
    </section>
    <section class="changePage">
      <el-pagination layout="prev, pager, next" :total="total" @current-change="pageChange">
  </el-pagination>
    </section>
  </div>
</template>
<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>
