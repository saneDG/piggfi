<template>
    <div id="start">
        <div
            class="circle"
            :class="{'enter-c': buttonEnter, 'pressed-c': buttonPressed, 'final-c': buttonHidden }"
            @click="clickyClick"
            @mouseenter="buttonEnter = true"
            @mouseleave="buttonEnter = false"
            @mousedown="buttonPressed = true"
            @mouseup="buttonHidden = true">
            <h3 :class="{'final-h': buttonHidden }">
                Pigg.fi
            </h3>
        </div>
    </div>
</template>

<script>

export default {
    name: "Start",
    components: {
    },
    data() {
        return {
            buttonEnter: false,
            buttonPressed: false,
            buttonHidden: false,
        }
    },
    methods:{
        clickyClick () {
            this.$emit('clicky-press')
        }
    }
};
</script>
<style lang="scss" scoped>
@import '~../styles/variables';

#start{
    height: 100vh;
    display: grid;
    place-items: center;
}
.circle{
    border-radius: 50%;
    width: 80vw;
    height: 80vw;
    border: 1px solid $color-white;
    display: grid;
    place-items: center;
    transition: transform .1s ease-in-out, border-color .5s;
    h3{
        margin: 0;
        transition: all 3s ease-in-out .4s, opacity 3s ease-in-out 1s;
    }
}
.enter-c{
    transform: scale(1.02);
}
.pressed-c{
    transform: scale(0.98);
}
.final-c{
    transform: scale(1);
    border-color: $color-black;
}

.final-h{
    position: absolute;
    font-size: 1vw;
    letter-spacing: 100vw;
    opacity: 0;
}

</style>
