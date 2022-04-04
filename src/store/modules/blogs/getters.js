export default {
  blogs(state) {
    return state.blogs;
  },
  hasBlogs(state) {
    return state.blogs && state.blogs.length > 0;
  },
  getBlog: (state) => (id) => {
    return state.blogs.find((blog) => blog.id === id);
  },
  isPopupOpen(state) {
    return state.blogs.isPopupOpen;
  },
  getPopupPosition(state) {
    return state.blogs.popupPosition;
  },
};
