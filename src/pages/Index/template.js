import blog from '@/api/blog.js'


export default {
    data(){
      return {
        blogs: [],
        total: 0,

      }
    },
    created(){
      blog.getBlogs().then(res=>{
        this.blogs = res.data
        this.total = res.total
      })
    },
    methods: {
      pageChange(newPage){
        blog.getBlogs({page: newPage}).then(res=>{
          this.blogs = res.data
          this.total = res.total
        })
      }
    }
  }