<script setup>
import iTmp from '../assets/wh4.jpg'
</script>

<template>
    <div class="whole">
        <div class="content">
            <div class="top">
                <h1 class="title"><slot name="title"></slot></h1>
                <h5 class="author"><slot name="author"></slot></h5>
            </div>
            <div>
                <slot name="text"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
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
