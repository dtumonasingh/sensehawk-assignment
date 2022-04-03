<template>
    <div>
        HIGHLIGHTS
        <ul v-if="hasHighlights">
            <li v-for="highlight in highlights" :key="highlight.id">
               <router-link :to="`/highlights/${highlight.id}`"> {{ highlight.value }} </router-link>
            </li>
        </ul>
        <h3 v-else>No highlights Found </h3>
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
