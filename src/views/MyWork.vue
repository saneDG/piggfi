<template>
    <div id="my-work">
        <WebPages />
        <hr class="hr">
        <h3 class="subhead">
            Fun Projects
        </h3>
        <div
            v-for="(project, index) in projects"
            :key="index"
            class="fun-projects-container">
            <ProjectCard
                :color="project.color"
                :header="project.name"
                :description="project.description"
                :link="project.link" />
        </div>
    </div>
</template>

<script>
import WebPages from '../components/WebPages'
import ProjectCard from '../components/ProjectCard'
export default {
    name: "MyWork",
    components: {
        WebPages,
        ProjectCard
    },
    props:{
        projects: {
            type: Array,
            default: null
        }
    },
    data (){
        return{};
    },
    methods:{
    }
};
</script>
<style lang="scss" scoped>
@import '~../styles/variables';

#my-work {
    .hr{
        border: none;
        border-top: solid 1px $color-white-active;
        width: 50%
    }
}
.subhead{
    margin-left: 32px;
}
</style>
