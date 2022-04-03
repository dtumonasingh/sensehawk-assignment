export default {
  createOrUpdate(context, blog) {
    context.commit('createOrUpdate', blog)
      },
      deleteBlog(context, id) {
        context.commit('deleteBlog', id)
      },
      openClosePopup(context, value) {
        context.commit('openClosePopup', value)
      }
};