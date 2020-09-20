<template>
    <div
        id="arrow-image">
        <svg
            width="17"
            height="26"
            viewBox="0 0 17 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1 25L14.8667 14.6C15.9333 13.8 15.9333 12.2 14.8667 11.4L1 1"
                stroke="#A3A3A3" />
        </svg>
    </div>
</template>

<script>

export default {
    name: "ArrowImage",
    components: {
    },
    props: {
        linkToPage: {
            type: String,
            required: false,
            default: ""
        }
    },
    data (){
        return {

        } 
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
@import '~../styles/variables';

#arrow-image {
}
</style>