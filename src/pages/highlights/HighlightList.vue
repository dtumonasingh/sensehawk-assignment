<template>
    <div>
        <router-link to="/highlights">HIGHLIGHTS</router-link>
        <ul v-if="hasHighlights">
            <li v-for="highlight in highlights" :key="highlight.id">
               <router-link :to="`/highlights/${highlight.id}`"> {{ highlight.value }} </router-link>
            </li>
        </ul>
        <h3 v-else>No highlights Found </h3>
        <router-view></router-view>        
    </div>
</template>

<script>

export default {
    computed: {
        highlights() {
            return this.$store.getters['highlights/highlights'];

        },
        hasHighlights() {
            return this.$store.getters['highlights/hasHighlights'];
        }
    }
}
</script>

<style scoped>
#blogs-list{
    display: flex;
    flex-direction: row;
}
</style>
