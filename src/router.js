import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/blogs', component: null },
        { path: '/blogs/:id', component: null },
        { path: '/hightlights', component: null },
        { path: '/hightlights/:id', component: null },
        { path: '/:notFound(.*)', component: null }
    ],
});

export default router;