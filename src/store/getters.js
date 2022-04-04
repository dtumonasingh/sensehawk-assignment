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
    return state.isPopupOpen;
  },
  getPopupPosition(state) {
    return state.selectedWord.popupPosition;
  },
  highlights(state) {
    return state.highlights;
},
hasHighlights(state) {
    return state.highlights && state.highlights.length > 0;
},
getHighlight: (state) => (id) => {
    return state.highlights.find(highlight => highlight.id === id)
},
};
