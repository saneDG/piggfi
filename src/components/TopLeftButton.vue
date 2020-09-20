<template>
    <div id="top-left-button">
        <div
            v-if="state === 'refresh'"
            class="refresh">
            <!-- REFRESH BUTTON IMAGE -->
            <img
                src="logoW.png"
                alt="logo">
        </div>
        <div
            v-if="state === 'back'"
            class="refresh">
            <!-- BACK BUTTON IMAGE -->
            <svg
                width="14"
                height="24"
                viewBox="0 0 14 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM3 10.5L2 10.5L2 13.5L3 13.5L3 10.5Z"
                    fill="black" />
            </svg>
        </div>
        <div
            v-else />
    </div>
</template>

<script>

export default {
    name: "RefreshImage",
    components: {
    },
    props: {
        state:{
            type: String,
            required: true
        }
    },
    data (){
        return {

        } 
    },
    mounted(){
        console.log('state = ' + this.state)
    },
    methods:{
    },
};
</script>

<style lang="scss" scoped>
@import '~../styles/variables';

#top-left-button {
    position: absolute;
    top: 0;
    .refresh{
        width: 52px;
        height: 64px;
        img{
            padding: 8px;
            width: 100%;
            height: 100%;
            filter: brightness(0.9);
        }
    }
}
</style>