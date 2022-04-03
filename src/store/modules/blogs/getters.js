export default {
    blogs(state) {
        return state.blogs;
    },
    hasBlogs(state) {
        return state.blogs && state.blogs.length > 0;
    },
    getBlog: (state) => (id) => {
        console.log(id);
        return state.blogs.find(blog => blog.id === id)
    }
};