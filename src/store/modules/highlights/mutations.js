export default {
  addHighlight(state, obj) {
        const highlightExists = state.highlights.some(highlight => highlight.value === obj.value);        
        if(highlightExists){            
            let index = state.highlights.findIndex(highlight => highlight.value === obj.value);
            let blogIds = state.highlights[index].blogIds;
            
            let blogIdExists = blogIds.some(blogId => blogId == obj.blogId);
            if(!blogIdExists) {
                blogIds.push(obj.blogId);
                state.highlights[index].blogIds = blogIds;
            }
        }
        else {
            let id = "id" + new Date().getTime();
            let highlight = {
                id: id,
                value: obj.value,
                blogIds: new Array(obj.blogId),
              };
              state.highlights.push(highlight);
        }   
  },
};
