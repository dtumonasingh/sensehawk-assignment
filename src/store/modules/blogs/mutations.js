export default {
    createOrUpdate(state, blog) {
        let id = blog.id;
        const blogExists = state.blogs.some(blog => blog.id === id);
        if(blogExists){            
            let index = state.blogs.findIndex((blog => blog.id == id));
            state.blogs[index].title = blog.title;
            state.blogs[index].author = blog.author;
            state.blogs[index].content = blog.content;
        }
        else {
            let id = 'id' + (new Date()).getTime();
            blog.id = id;
            state.blogs.push(blog);
        }
    },
    deleteBlog(state, id) {
        let index = state.blogs.findIndex(function(blog){
            return blog.id === id;
       })
       if (index !== -1) state.blogs.splice(index, 1);
    }
};