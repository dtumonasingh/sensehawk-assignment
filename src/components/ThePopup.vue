<template>
    <div v-if="isPopupOpen" id="popup">
        <p>H</p>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            isPopupOpen : "blogs/isPopupOpen"
        })
    }

}
</script>

<style scoped>
#popup {
    position: absolute;
    background-color: black;
    height: 20px;
    width: 20px;
}
p{
    color: aliceblue;
    text-align: center;
}
</style>