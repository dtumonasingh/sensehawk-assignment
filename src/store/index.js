import { createStore } from 'vuex';

import blogsModule from './modules/blogs/index.js';
import highlightsModule from './modules/highlights/index.js';

const store = createStore({
    modules: {
        blogs: blogsModule,
        highlights: highlightsModule
    }
})

export default store;