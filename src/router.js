import { createRouter, createWebHashHistory } from "vue-router";

import Blog from "@/pages/blogs/Blog";
import BlogList from "@/pages/blogs/BlogList";
import NewBlog from "@/pages/blogs/NewBlog";
import Highlight from "@/pages/highlights/Highlight";
import HighlightList from "@/pages/highlights/HighlightList";

import NotFound from "@/pages/NotFound";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/blogs" },
    { path: "/blogs", component: BlogList },
    { path: "/blogs/:id", component: Blog, props: true },
    { path: "/new-blog", component: NewBlog },
    { path: "/update-blog/:id", component: NewBlog, props: true },
    {
      path: "/highlights",
      component: HighlightList,
      children: [{ path: "/highlights/:id", component: Highlight, props: true }],
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;