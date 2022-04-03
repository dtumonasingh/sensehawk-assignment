export default {
    createBlog(state, blog) {
        let id = 'id' + (new Date()).getTime();
        blog.id = id;
        state.blogs.push(blog);
        console.log(state.blogs)
    },
    deleteBlog(state, id) {
        let index = state.blogs.findIndex(function(blog){
            return blog.id === id;
       })
       if (index !== -1) state.blogs.splice(index, 1);
    }
};