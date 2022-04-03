<template>
  <div class="blog">
    <h1>
      {{ blog.title }}
    </h1>

    <h3>
      {{ blog.author }}
    </h3>
    <p>
      {{ blog.content }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ["id"],
  beforeMount() {
      debugger;
  },
  mounted() {
      debugger;
  },
  computed: {
    ...mapGetters({
        getBlog : 'blogs/getBlog'
    }),
    blog() {
        return this.getBlog(this.id);
    }
    
  },
};
</script>

<style>
.blog {
  display: flex;
  flex-direction: column;
}
</style>
