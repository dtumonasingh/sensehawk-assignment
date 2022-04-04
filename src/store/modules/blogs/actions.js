export default {
  createOrUpdate(context, blog) {
    context.commit("createOrUpdate", blog);
  },
  deleteBlog(context, id) {
    context.commit("deleteBlog", id);
  },
  openClosePopup(context, payload) {
    context.commit("openClosePopup", payload);
  },
};
