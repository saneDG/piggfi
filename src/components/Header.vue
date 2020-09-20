<template>
    <div
        id="header">
        <transition name="fade">
            <h1
                v-show="scrollYPosition < 10"
                :key="text">
                {{ text }}
            </h1>   
        </transition>
    </div>
</template>

<script>

export default {
    name: "Header",
    components: {
    },
    props:{
        text:{
            type: String,
            default: ""
        }
    },
    data () {
        return {
            scrollYPosition: 0
        } 
    },
    computed: {
    },
    mounted () {
        window.addEventListener("scroll", this.isScrollAtTop)
    },
    methods:{
        isScrollAtTop () {
            this.scrollYPosition = window.scrollY;
        }
    }
};
</script>

<style lang="scss" scoped>

@import '../styles/variables';

#header{
    z-index: 2;
    background-color: transparent;
    position: fixed;
    white-space: nowrap;
    top: 8px; 
    left: 8px;
    margin-left: 64px;
}

.fade-enter-active, .fade-leave-active {
    opacity: 0;
    margin-left: 100vw;
    transition: all .3s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
