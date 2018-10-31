<template>
  <div id="user">
    <section class="user-info">
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="avatar">
      <h3>若愚</h3>
    </section>
    <section class="contents">
      <div class="item">
        <div class="date">
          <p class="day">20</p>
          <p class="mouth">5月</p>
          <p class="year">2018</p>
        </div>
        <h3>前端异步解密</h3>
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括 普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>

      <div class="item">
        <div class="date">
          <p class="day">20</p>
          <p class="mouth">5月</p>
          <p class="year">2018</p>
        </div>
        <h3>前端异步解密</h3>
        <p>本文以一个简单的文件读写为例，讲解了异步的不同写法，包括  普通的 callback、ES2016中的Promise和Generator、 Node 用于解决回调的co 模块、ES2017中的async/await。适合初步接触 Node.js以及少量 ES6语法的同学阅读...</p>
      </div>
    </section>
    <el-pagination
    layout="prev, pager, next"
    :total="1">
  </el-pagination>
  </div>
</template>
<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>
