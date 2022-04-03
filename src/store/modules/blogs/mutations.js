export default {
    createBlog(state, blog) {
        let id = 'id' + (new Date()).getTime();
        blog.id = id;
        state.blogs.push(blog);
        console.log(state.blogs)
    }
};