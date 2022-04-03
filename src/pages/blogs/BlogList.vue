<template>
    <div>
        BLOG LIST

        <ul v-if="hasBlogs">
            <li v-for="blog in blogs" :key="blog.id">
                <router-link :to="`/blogs/${blog.id}`"> 
                <bloglist-item :id="blog.id"/>
                </router-link>                
            </li>
            </ul>
            <h3 v-else>No Blogs Found </h3>
    </div>
</template>

<script>

import BlogListItem from '@/components/BlogListItem';

export default {
    components: {
        'bloglist-item' : BlogListItem
    },
    computed: {
        blogs() {
            return this.$store.getters['blogs/blogs'];
        },
        hasBlogs() {
            return this.$store.getters['blogs/hasBlogs'];
        }
    }
}
</script>

<style scoped>

</style>
