<template>
  <div id="highlightlist">
    <router-link class="page-title" to="/highlights">HIGHLIGHTS</router-link>
    <ul v-if="hasHighlights">
      <li
        class="highlights--list__item"
        v-for="highlight in highlights"
        :key="highlight.id"
      >
        <router-link :to="`/highlights/${highlight.id}`">
          {{ highlight.value }}
        </router-link>
      </li>
    </ul>
    <h3 v-else>No highlights Found</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    highlights() {
      return this.$store.getters["highlights"];
    },
    hasHighlights() {
      return this.$store.getters["hasHighlights"];
    },
  },
};
</script>

<style scoped>
#blogs-list {
  display: flex;
  flex-direction: row;
}

.highlights--list__item p {
  margin: 10px 0px 10px 0px;
}

.highlights--list__item .router-link-active {
  background-color: yellow;
}
</style>
