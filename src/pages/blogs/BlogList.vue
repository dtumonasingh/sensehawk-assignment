<template>
    <div>
        BLOG LIST

        <ul v-if="hasBlogs">
            <li v-for="blog in blogs" :key="blog.id">
                <router-link :to="blog.route"> {{ blog.title }} | {{ blog.author}} </router-link>
                
            </li>
            </ul>
            <h3 v-else>No Blogs Found </h3>
    </div>
</template>

<script>

export default {
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
