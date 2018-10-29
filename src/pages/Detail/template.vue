<template>
  <div id="detail">
    <section class="avatar">
      <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="avatar">
      <h3>前端异步大揭秘</h3>
      <p><router-link to="/user">若愚</router-link> 发布于3天前</p>
    </section>
    <section class="article">
      <h1 id="css-网格布局学习指南">CSS 网格布局学习指南</h1>
<p>CSS 网格布局(Grid Layout) 是CSS中最强大的布局系统。 这是一个二维系统，这意味着它可以同时处理列和行，不像 <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">flexbox</a> 那样主要是一维系统。 你可以通过将CSS规则应用于父元素（成为网格容器）和该元素的子元素（网格元素），来使用网格布局。</p>
<blockquote>
<p><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank">本文</a>出自于 <a href="http://chris.house/blog/a-complete-guide-css-grid-layout/" target="_blank">Chris House</a> 的个人博客，由<a href="https://jirengu.com" target="_blank">饥人谷</a> <a href="https://www.zhihu.com/people/jirengu-ruo-yu" target="_blank">若愚老师</a>翻译</p>
</blockquote>
<h2 id="引言">引言</h2>
<p>CSS网格布局（又名“网格”）是一个二维的基于网格的布局系统，其目的只在于完全改变我们设计基于网格的用户界面的方式。 CSS一直用来布局网页，但一直都不完美。 一开始我们使用table 做布局，然后转向浮动、定位以及inline-block，但所有这些方法本质上都是 Hack 的方式，并且遗漏了很多重要的功能（例如垂直居中）。 Flexbox的出现在一定程度上解决了这个问题，但是它的目的是为了更简单的一维布局，而不是复杂的二维布局（Flexbox和Grid实际上一起工作得很好）。 只要我们一直在制作网站，我们就一直在为解决布局问题不断探索，
而Grid是第一个专门为解决布局问题而生的CSS模块。</p>
<p>有两个东西，启发我写这篇指南。 第一个是雷切尔·安德鲁（Rachel Andrew）的书<a href="http://abookapart.com/products/get-ready-for-css-grid-layout" target="_blank">为CSS Grid布局准备</a>。 这本书对网格布局做了彻底、清晰的介绍，也是是整篇文章的基础，我强烈建议你购买并阅读他的书。 我的另一个重要灵感是Chris Coyier的<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Flexbox完全指南</a>，当需要查阅 flexbox 的一切资料时我就会找这篇文章。 这篇文章帮助了很多人学习 Flex 布局，也是 Google 上搜索“flexbox”关键字排名第一的文章。你会发现他的文章和我的很多相似之处，有最好的范例在那放着为什么咱不偷师学着写呢？</p>
<p>本指南的目的是介绍网格概念，因为它们存在于最新版本的规范中。 因此我不会覆盖过时的IE语法，而且随着规范的成熟，我会尽最大努力保存更新本指南。</p>
<h2 id="基础知识以及浏览器支持情况">基础知识以及浏览器支持情况</h2>
<p>一开始你需要使用<code>display：grid</code>把容器元素定义为一个网格，使用<code>grid-template-columns</code>和<code>grid-template-rows</code>设置列和行大小，然后使用<code>grid-column</code> 和 <code>grid-row</code>把它的子元素放入网格。 与flexbox类似，网格子元素的原始顺序不重要。 你的可以在 CSS 里以任意顺序放置它们，这使得使用媒体查询重新排列网格变得非常容易。 想象一下，我们需要定义整个页面的布局，然后为了适应不同的屏幕宽度完全重新排列，我们只需要几行CSS就能实现这个需求。 网格是有史以来最强大的CSS模块之一。</p>
<p>截至2017年3月，许多浏览器都提供了原生的、不加前缀的对CSS Grid的支持，比如 Chrome（包括Android），Firefox，Safari（包括iOS）和Opera。 另一方面，Internet Explorer 10和11支持它，但需要使用过时的语法。 Edge浏览器已经宣布将支持标准的Grid语法，但暂未支持。</p>
<blockquote>
<p>浏览器支持的详细数据可在<a href="http://caniuse.com/#feat=css-grid" target="_blank">Caniuse</a>查看。其中里面的数字表示该版本以上的浏览器支持Grid。</p>
</blockquote>
<h3 id="桌面浏览器">桌面浏览器</h3>
<table>
<thead>
<tr>
<th style="text-align:center">Chrome</th>
<th style="text-align:center">Opera</th>
<th style="text-align:center">Firefox</th>
<th style="text-align:center">IE</th>
<th style="text-align:center">Edge</th>
<th style="text-align:center">Safari</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">57</td>
<td style="text-align:center">44</td>
<td style="text-align:center">52</td>
<td style="text-align:center">11*</td>
<td style="text-align:center">16</td>
<td style="text-align:center">10.1</td>
</tr>
</tbody>
</table>
<h3 id="移动端--平板">移动端 / 平板</h3>
<table>
<thead>
<tr>
<th style="text-align:center">iOS Safari</th>
<th style="text-align:center">Opera Mobile</th>
<th style="text-align:center">Opera Mini</th>
<th style="text-align:center">Android</th>
<th style="text-align:center">Android Chrome</th>
<th style="text-align:center">Android Firefox</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">10.3</td>
<td style="text-align:center">No</td>
<td style="text-align:center">No</td>
<td style="text-align:center">62</td>
<td style="text-align:center">62</td>
<td style="text-align:center">57</td>
</tr>
</tbody>
</table>
<p>除了微软之外，浏览器制造商在 Grid 规范完全落地以前似乎并没有放手让 Gird 野生也长的打算。 这是一件好事，这意味着我们不需要再去学习各种浏览器兼容版本的旧语法。</p>
<p>在生产环境中使用Grid只是时间问题，但现在是我们该学习的时候了。</p>
<h2 id="重要术语">重要术语</h2>
<p>在深入了解网格的概念之前，理解术语是很重要的。 由于这里所涉及的术语在概念上都是相似的，如果不先记住它们在网格规范中定义的含义，则很容易将它们彼此混淆。 但是不用太担心，这些术语并不多。</p>
<h3 id="grid-container">Grid Container</h3>
<p>设置了 <code>display: gird</code> 的元素。 这是所有 grid item 的直接父项。 在下面的例子中，<code>.container</code> 就是是 grid container。</p>
<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item item-1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item item-2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item item-3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
<h3 id="grid-item">Grid Item</h3>
<p>Grid 容器的孩子（直接子元素）。下面的 <code>.item</code> 元素就是 grid item，但 <code>.sub-item</code>不是。</p>
<pre><code class="lang-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> 
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sub-item"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"item"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
<h3 id="grid-line">Grid Line</h3>
<p>这个分界线组成网格结构。 它们既可以是垂直的（“column grid lines”），也可以是水平的（“row grid lines”），并位于行或列的任一侧。 下面例中的黄线就是一个列网格线。</p>
<p><img src="https://cloud.hunger-valley.com/18-1-11/48497835.jpg" alt=""></p>
<h3 id="grid-track">Grid Track</h3>
<p>两个相邻网格线之间的空间。 你可以把它们想象成网格的列或行。 下面是第二行和第三行网格线之间的网格轨道。</p>
<p><img src="https://cloud.hunger-valley.com/18-1-11/44840078.jpg" alt=""></p>
<h3 id="grid-cell">Grid Cell</h3>
<p>两个相邻的行和两个相邻的列网格线之间的空间。它是网格的一个“单元”。 下面是行网格线1和2之间以及列网格线2和3的网格单元。</p>
<p><img src="https://cloud.hunger-valley.com/18-1-11/38456584.jpg" alt=""></p>
<h3 id="grid-area">Grid Area</h3>
<p>四个网格线包围的总空间。 网格区域可以由任意数量的网格单元组成。 下面是行网格线1和3以及列网格线1和3之间的网格区域。</p>
<p><img src="https://cloud.hunger-valley.com/18-1-11/38612829.jpg" alt=""></p>
<h2 id="grid-属性列表">Grid 属性列表</h2>
<p>Grid Container 的全部属性</p>
<ul>
<li>display</li>
<li>grid-template-columns</li>
<li>grid-template-rows</li>
<li>grid-template-areas</li>
<li>grid-template</li>
<li>grid-column-gap</li>
<li>grid-row-gap</li>
<li>grid-gap</li>
<li>justify-items</li>
<li>align-items</li>
<li>justify-content</li>
<li>align-content</li>
<li>grid-auto-columns</li>
<li>grid-auto-rows</li>
<li>grid-auto-flow</li>
<li>grid</li>
</ul>
<p>Grid Items 的全部属性</p>
<ul>
<li>grid-column-start</li>
<li>grid-column-end</li>
<li>grid-row-start</li>
<li>grid-row-end</li>
<li>grid-column</li>
<li>grid-row</li>
<li>grid-area</li>
<li>justify-self</li>
<li>align-self</li>
</ul>
    </section>
  </div>
</template>
<script src="./template.js"></script>
<style scoped lang="less" src="./template.less"></style>
