
<template>
    <div
        id="project-card"
        @click="gotoPage(link)">
        <div
            class="thumbnail"
            :style="{background: color}">
            <h2 class="letter">
                {{ letter }}
            </h2>
        </div>
        <div class="small-content">
            <h4>
                {{ header }}
            </h4>
            <p class="description">
                {{ description }}
            </p>
        </div>
        <div class="arrow">
            <ArrowImage />
        </div>
    </div>
</template>

<script>

import ArrowImage from './ArrowImage'
import {colors} from '../js/randomColors'

export default {
    name: "ProjectCard",
    components: {
        ArrowImage
    },
    props: {
        color: {
            type: String,
            default: function () {
                return colors[Math.floor(Math.random() * colors.length)];
            }
        },
        header:{
            type: String,
            default: ""
        },
        description:{
            type: String,
            default: ""
        },
        link:{
            type: String,
            default: ""
        }
    },
    data () {
        return {
            colori: ""
        } 
    },
    computed: {
        letter () {
            const ltr = this.header.charAt(0);

            const isThe = (this.header.substring(0,4) === "the ")
            if (isThe) {
                this.header.charAt(4)
            }

            return ltr
        },
        // randomColor () {
        //     return colors[Math.floor(Math.random() * colors.length)];
        // }
    },
    mounted () {
        this.$nextTick(() => {
            // this.$props.color.default = colors[Math.floor(Math.random() * colors.length)];
        })
    },
    methods: {
        gotoPage(link){
            window.open(link)
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~../styles/variables';
#project-card{
    display: flex;
    margin: 16px;
    h4{
        margin: 0;
    }
}
.thumbnail{
    min-width: 64px;
    height: 64px;
    // border: $color-white 1px solid;
    border-radius: 16px;
    display: grid;
    place-items: center;
    filter: opacity(0.8);
    .letter{
        font-weight: 300;
        margin: 0;
        filter: invert(1);
    }
}
.small-content{
    margin: 0 24px;
    .description{
        margin:0;
        font-weight: 100;
    }
}
.arrow{
    align-self: center;
    margin:0 0 0 auto;
}
</style>
