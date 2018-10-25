import request from '@/helpers/request.js'
import auth from '@/api/auth.js'
import blog from '@/api/blog.js'
window.request = request
window.auth = auth
window.blog = blog

export default {
    methods: {
      click1(){
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
      },
      click2(){
        this.$message.error('错了哦，这是一条错误消息');
      },
      click3(){
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'success',
              message: `点了确定`
            })
          }
        })
      }
    }
  }