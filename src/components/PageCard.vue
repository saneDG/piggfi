
<template>
    <div id="page-card">
        <div
            v-for="page in work"
            :key="page.id"
            class="imgDiv">
            <h4 class="text">
                {{ page.name }}
            </h4>
            <img
                :key="page.image"
                class="image"
                :src="page.image">
        </div>
    </div>
</template>

<script>
export default {
    name: "PageCard",
    components: {},
    props: {
        work: {
            default: null,
            type: Array,
        },
    },
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
@import "~../styles/variables";
#page-card {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 32px 0 0 0px;
    padding: 0 8px;
    .imgDiv {
        margin-left: 8px;
        height: 260px;
        width: 90vw;
        text-align: center;
        .image {
            margin-right: 8px;
            object-fit: cover;
            height: 100%;
            width: 90vw;
            border-radius: 8px;
            filter: brightness(0.3);
            transform: translate(0, -50px);
            text-align: center;
        }
        .text {
            min-height: 50px;
            margin: 0;
            position: relative;
            transform: translate(0, 130px);
            z-index: 2;
        }
    }
}
/* width */
::-webkit-scrollbar {
    width: 0;
}

/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: transparent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: transparent;
}
</style>
