
<template>
    <div id="web-pages">
        <PageCard :work="work" />
    </div>
</template>

<script>

import PageCard from './PageCard';

import { work } from '../js/work';

export default {
    name: "WebPages",
    components: {
        PageCard
    },
    data (){
        return {
            work: work
        } 
    },
    methods:{
    }
};
</script>

<style lang="scss" scoped>
@import '~../styles/variables';
#web-pages{

}
</style>
