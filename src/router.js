import { createRouter, createWebHashHistory } from 'vue-router';

import Blog from '@/pages/blogs/Blog';
import BlogList from '@/pages/blogs/BlogList';
import Hightlight from '@/pages/highlights/Highlight';
import HightlightList from '@/pages/highlights/HighlightsList';

import NotFound from '@/pages/NotFound';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/blogs', component: BlogList },
        { path: '/blogs/:id', component: Blog },
        { path: '/hightlights', component: HightlightList },
        { path: '/hightlights/:id', component: Hightlight },
        { path: '/:notFound(.*)', component: NotFound }
    ],
});

export default router;