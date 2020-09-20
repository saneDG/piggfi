<template>
    <div id="clicky">
        <h1>
            Pigg.fi
        </h1>
    </div>
</template>

<script>

export default {
    name: "Clicky",
    components: {
    },
    data (){
        return {
            currentPage: 'start'
        } 
    },
    methods:{
        switchPage(pageName){
            this.currentPage = pageName
        }
    }
};
</script>

<style>
#clicky {
}
</style>
