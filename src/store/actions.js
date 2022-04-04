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
  addHighlight(context) {
    context.commit("addHighlight");
    context.commit("addHighlightedWordToBlog");
  },
  setSelectedWord(context, payload) {
    context.commit("setSelectedWord", payload);
  },
};
