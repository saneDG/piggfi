
<template>
    <div id="mute">
        <button
            class="mute-button"
            @click="emitClick">
            <h5 :class="{overline: muted}">
                SOUND
            </h5>
        </button>
    </div>
</template>

<script>

export default {
    name: "Mute",
    components: {
    },
    data (){
        return {
            muted: false
        } 
    },
    methods:{
        emitClick(){
            this.muted = !this.muted
            this.$emit('mute-clicked')
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~../styles/variables';

#mute {
    position: fixed;
    bottom: 5px;
    right: 10px;
    .mute-button{
        background: $color-white-not;
        border: none;
        color: $color-white;
        transition: all .2s ease-in-out;
        &:hover{
            background-color: $color-white-active;
        }
        h5{
            margin: 0;
        }
    }
}
.overline{
    text-decoration: line-through;
}
button:focus { outline: none; }
</style>
