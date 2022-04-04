export default {
  createOrUpdate(state, blog) {
    let id = blog.id;
    const blogExists = state.blogs.some((blog) => blog.id === id);
    if (blogExists) {
      let index = state.blogs.findIndex((blog) => blog.id == id);
      state.blogs[index].title = blog.title;
      state.blogs[index].author = blog.author;
      state.blogs[index].content = blog.content;
    } else {
      let id = "id" + new Date().getTime();
      blog.id = id;
      state.blogs.push(blog);
    }
  },
  deleteBlog(state, id) {
    let index = state.blogs.findIndex(function (blog) {
      return blog.id === id;
    });
    if (index !== -1) state.blogs.splice(index, 1);
  },
  openClosePopup(state, payload) {
    if (payload.value == "open") {
      state.isPopupOpen = true;
      state.popupPosition = payload.position;
    } else if (payload.value == "close") {
      state.isPopupOpen = false;
    }
  },
  addHighlightedWordToBlog(state) {
    let payload = state.selectedWord;
    const blogExists = state.blogs.some((blog) => blog.id === payload.blogId);
    if (blogExists) {
      let index = state.blogs.findIndex((blog) => blog.id == payload.blogId);
      state.blogs[index].highlightedWords.push(payload.wordId);
    }
  },
  addHighlight(state) {
    let payload = state.selectedWord;

    const highlightExists = state.highlights.some(
      (highlight) => highlight.value === payload.value
    );
    if (highlightExists) {
      let index = state.highlights.findIndex(
        (highlight) => highlight.value === payload.value
      );
      let blogIds = state.highlights[index].blogIds;

      let blogIdExists = blogIds.some((blogId) => blogId == payload.blogId);
      if (!blogIdExists) {
        blogIds.push(payload.blogId);
        state.highlights[index].blogIds = blogIds;
      }
    } else {
      let id = "id" + new Date().getTime();
      let highlight = {
        id: id,
        value: payload.value,
        blogIds: new Array(payload.blogId),
      };
      state.highlights.push(highlight);
    }
  },
  setSelectedWord(state, payload) {
    state.selectedWord.value = payload.value;
    state.selectedWord.blogId = payload.blogId;
    state.selectedWord.wordId = payload.wordId;
    state.selectedWord.popupPosition = payload.popupPosition;
  },
};
