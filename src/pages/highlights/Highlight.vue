<template>
  <div class="highlight--blogs">
    <div class="highlight--blogs__item" v-for="blog in blogs" :key="blog.id">
        <p v-html="blog.content"> </p>
        <router-link :to="`/blogs/${blog.id}`"> <button>preview</button></router-link>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters({
      getHighlight: "getHighlight",
      getBlog: "getBlog"
    }),
    highlight() {
      return this.getHighlight(this.id);
    },
    blogs() {
        let ids = this.highlight.blogIds;
        let blogList=[];
        ids.map((id) => {
           blogList.push(this.getBlog(id));
        })
        return blogList;
    }
  },
};
</script>

<style scoped>
 .highlight--blogs__item {
     border: 1px solid #ccc;
     margin: 10px 0px 10px 0px;
     padding: 10px;
 }

</style>
