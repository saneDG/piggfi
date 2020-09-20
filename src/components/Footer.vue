<template>
    <div id="footer">
        <h5 class="sub">
            Santeri Pigg
        </h5>
    </div>
</template>

<script>

export default {
    name: "Footer",
    components: {
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

#footer {
    position: fixed;
    bottom: 0;
    left: 0;
    .sub{
        color: $color-white-not;
        margin: 0;
        &:hover{
            color: $color-white
        }
    }
}
</style>