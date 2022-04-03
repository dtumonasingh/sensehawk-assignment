export default {
    createBlog(context, blog) {
        context.commit('createBlog', blog)
      },
      deleteBlog(context, id) {
        context.commit('deleteBlog', id)
      }
};