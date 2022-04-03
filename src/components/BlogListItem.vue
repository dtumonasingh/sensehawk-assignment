<template>
    <div class="bloglist">
        <p class="bloglist--title">
            {{ blog.title }} 
        </p>

        <p class="bloglist--author">
            {{ blog.author }} 
        </p>

        <p class="bloglist--content">
            {{ blog.content }}
        </p>
    </div>
</template>
<script>


export default ({
    props: {
        blog: {
            type: Object,
            require: true
        }
    }
})
</script>

<style scoped>
 .bloglist {
     border: 1px solid #ccc;
     border-radius: 10px;
     padding: 10px;
     margin: 15px 0px 15px 0px;
 }

 .bloglist--title {
     font-size: 16px;
}

.bloglist--author {
    font-size: 14px;
}

.bloglist--content {
    font-size: 12px;
    height: 40px;
    overflow: clip;
}
</style>
