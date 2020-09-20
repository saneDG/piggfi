<template>
    <div id="app">
        <img
            class="background-image move-background"
            src="logoW.png"
            @click.self.prevent>
        <transition-group name="fade">
            <TopLeftButton :state="state" />
            <Header
                v-show="true"
                :key="currentPage"
                :text="currentPage" />
            <Mute
                key="mute"
                @mute-clicked="mute(toggleMute = !toggleMute)" />
            <div
                v-if="currentPage === 'Hello'"
                key="Hello"
                :class="{'hide-play': currentPage !== 'Hello'}"
                class="play-button"
                @click="startAudio(selectedSong),currentPage = 'Lets start'">
                <h3>PLAY</h3>
            </div>
            <Start
                v-if="currentPage === 'Lets start'"
                key="Lets start"
                @clicky-press="switchPage('My work')" />
            <MyWork
                v-if="currentPage === 'My work'"
                :work="myWork"
                :projects="myProjects" />
            <FunProjects
                v-if="currentPage === 'funprojects'" />
            <Footer />
        </transition-group>
    </div>
</template>

<script>
import Start from "./views/Start.vue";
import MyWork from "./views/MyWork.vue";
import FunProjects from "./views/FunProjects.vue";
import Mute from "./components/Mute.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import TopLeftButton from "./components/TopLeftButton.vue";

import projects from "./js/projects"

import {Howl, Howler} from 'howler';


export default {
    name: "App",
    components: {
        Start,
        MyWork,
        FunProjects,
        Mute,
        Header,
        Footer,
        TopLeftButton
    },
    data (){
        return {
            myWork: null,
            myProjects: null,
            currentPage: 'Hello',
            selectedSong: 'music/piisi.mp3',
            currentSong: new Audio(this.selectedSong),
            noClickSound: new Audio('music/no.mp3'),
            yesClickSound: new Audio('music/yes.mp3'),
            toggleMute: false
        } 
    },
    computed:{
        state () {
            let curretState = ""
            if (this.currentPage === "My work"){
                curretState = "refresh"
            } else if (this.currentPage === "funprojects") {
                currentState = "back"
            }
            console.log(curretState)
            return curretState;
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.myProjects = projects;
        });
    },
    methods:{
        switchPage(pageName){
            this.currentPage = pageName
        },
        startAudio(path) {
            const audio = new Audio(path);
            this.currentSong = audio;
            var playPromise = this.currentSong.play();
            this.currentSong.volume = 0.3;
            this.mute(this.toggleMute)

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    console.log('Did you hear that?');
                })
                    .catch(error => {
                        console.log(`playSound error: ${error}`);
                    });
            }
        },
        mute(value){
            if(!value){
                this.currentSong.volume = 0.3;
                this.yesClickSound.play()
            } else {
                this.currentSong.volume = 0;
                this.noClickSound.play()
            }
        }
    }
};
</script>

<style lang="scss">

@import '~./styles/variables';

.fade-enter-active, .fade-leave-active {
    opacity: 0;
    transition: all .5s ease-in-out 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

/* Montserrat Alternates */
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.mute{
    position: fixed;
    bottom: 10px;
    right: 10px;
}

#app {
    font-family: 'Montserrat Alternates', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $color-white;
    width: 100vw;
    min-height: 100vh;
    margin-top: 86px;
}

html {
    width: 100%;
    height: 100%;
    padding:0;
    margin: 0;
    font-size: 100%;
    background-color: $color-black;
    overflow: auto;
}

body {
    font-weight: 200;
    line-height: 1.65;
    color: $color-white;
    padding:0;
    margin: 0;
}

p {margin-bottom: 1.15rem;}

h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1.05rem;
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 200;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 3.052em;
}

h2 {font-size: 2.441em;}

h3 {font-size: 1.953em;}

h4 {font-size: 1.563em;}

h5 {font-size: 1.25em;}

small, .text_small {font-size: 0.8em;}

.play-button{
    position: fixed;
    text-align: center;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    transition: all .3s ease-in-out;
}
.hide-play{
    left: 100px;
}

.background-image{
    position: fixed;
    z-index: -1;
    top: -20vh;
    left: -40vw;
    opacity: 5%;
    filter: blur(10px);
}

.move-background {
  animation-duration: 10s;
  animation-name: hovering;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

@keyframes hovering {
  from {
    transform: translate(0,0)
    rotateY(0deg)
  }
  
  to {
    transform: translate(-40vw,-40vh)
  }
}

</style>
