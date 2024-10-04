<script setup>
import iTmp from '../assets/wh4.jpg'
</script>

<template>
    <div class="whole">
        <div class="content">
            <div class="top">
                <center><h1 class="title"><slot name="title">{{ text.title }}</slot></h1></center>
                <h5 class="author"><slot name="author"> {{ text.author }}</slot></h5>
            </div>
            <div>
                <slot name="text"><p v-for="t in text.content">&ensp;{{ t }}</p></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
        text: {title: "The beginning of the endless and whole dstone", author: "Nihche", content: [
            `Starting to write a story is really hard, that is why I always start in the middle, because I don’t mind how I write. But why do I write? That is the question that makes my brain tingle. It is not a pleasant thing to do, but I still do it.`,
`I am searching for something, hidden deep in the unknown. And I have to find it, well at this point do I even have a choice? So much of it has already been written. `,
`I must finish it, even if I decided that I won’t do it. Who am I to decide that? The ending is already set in stone. I can’t escape it, none of us can.`,
`Stories commonly begin in the beginning, but I would like to start even before that. Going to the beginning of our universe, our reality, won’t be enough. We have to start before that. `,
`We came from nothing and we will go back to nothing. That is the absolute end to our story.`
        ]}
    }
  },
}
</script>

<style scoped>
.pp{
    display: flex;
    flex-direction: row;
}
.txtClose{
    position: absolute;
    height: 5vh;
    bottom: 0;
    width: 30vw;
    background-color: whitesmoke;
}
.whole{
    position: absolute;
    height: 100vh;
    width: 80vw;
    padding-left: 5vw;
    padding-right: 5vw;
    top:0em;
}
.content{
    overflow-x: hidden;
    overflow-y: auto;
    height: 88vh;
}
.author{
    position: relative;
    left:60vw;
}
</style>
