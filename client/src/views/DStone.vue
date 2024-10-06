<script setup>
import { RouterLink } from 'vue-router'
import xText from './xText.vue';
</script>

<template>
  <div class="top">
    <div class="topNavBtn" id="iMeni" @click="showMeni()">{{ meni }}</div>
    <div class="topNavBtn" @click="showProfil()" >{{ user }}</div>
    <div class="topNavBtn">Search</div>
  </div>
  <div class="statsUnderTop">{{nav}}NAV | {{cc}}CC</div>
  <div class="sideMeni" id="" v-show="sMeni">
    <div class="rBtns">
      <div class="rouBtn"><RouterLink to="/xText">Text</RouterLink></div>
      <div class="rouBtn">Market</div>
      <div class="rouBtn">Leatherboard</div>
    </div>
    <div>Search</div>
    <div class="mItem" v-for="i in fragments" @click="showContent(i.id)" :key="i.id"> {{ i.name }}</div>
  </div>
  <div class="cnt">
    <div v-for="c in fragments[sContentId].content" :key="c.id">
      <div class="itemContent">
        <div class="itIcon">image</div>
        <div v-if="fragments[0].content.some(st => st.name === fragments[sContentId].content[c.id].name)">
  	      <div class="itBtn" @click="openContent(c.name)">Open</div>
        </div>
        <div v-else>
          <div class="itBtn" @click="buyContent(c.id)">Buy</div>
        </div>
        <div class="itName">{{ c.name }}</div>
        <div class="itAuthor">{{ c.author }}</div>
        <div class="itAuthor">{{ c.id }}</div>
      </div>
    </div>
  </div>
  <div v-if="sText" class="cContent">
    <xText>
      <template #title>{{ text[sTextId].title }}</template>
      <template #author>{{ text[sTextId].author }}</template>
      <template #text><p v-for="p in text[sTextId].content">&nbsp;{{ p }}</p></template>
    </xText>
    <div class="botBCon">
        <div class="scBtn" @click="closeContent()">XClose</div>
        <div class="nextLast">
          <div class="" @click="prevContent()">Previous |</div>
          <div class="" @click="nextContent()"> &nbsp; Next</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DStone',
  components: {
    xText
  },
  data(){
    return{
      meni: 'Meni',
      user: 'Nihche',
      cc: 11,
      nav: 0,
      sMeni: false,
      sText: false,
      fragments: [
        {id: 0, name: 'Profile', content: [{id:0, author: "Nihche", name:"DStone00"}]},
        {id: 1, name: 'Tutorials', content: []},
        {id: 2, name: 'D-Stone', content: [{id:0, author: "Nihche", name:"DStone00"},{id:1, author: "Nihche", name:"DStone01"},{id:2, author: "Nihche", name:"DStone02"}]}
      ],
      text: [{id:0, name: "DStone00", title: "The beginning of the endless and whole dstone", author: "Nihche", content: [
            `Starting to write a story is really hard, that is why I always start in the middle, because I don’t mind how I write. But why do I write? That is the question that makes my brain tingle. It is not a pleasant thing to do, but I still do it.`,
`I am searching for something, hidden deep in the unknown. And I have to find it, well at this point do I even have a choice? So much of it has already been written. `,
`I must finish it, even if I decided that I won’t do it. Who am I to decide that? The ending is already set in stone. I can’t escape it, none of us can.`,
`Stories commonly begin in the beginning, but I would like to start even before that. Going to the beginning of our universe, our reality, won’t be enough. We have to start before that. `,
`We came from nothing and we will go back to nothing. That is the absolute end to our story.`,
``
        ]},
        {id: 1, name: "DStone01", title: "What is nothing?", author: "Nihche", content: [
            `I have a weird little obsession with the word nothing. I don’t really know when or how it happened. I guess there was a saying. “If you stare into the abyss, the abyss stares back at you.”`,
`We associate the word nothing with emptiness, darkness or lack of something. But I am looking from the other perspective, I see this lack of something as potential.  `,
`What I mean to say is that nothingness is the most immense potential of existence and is a primary infinity. Like a pot is molded out of clay, our reality is molded out of nothingness.`,
`We could also look at nothingness mathematically. A number that could represent it already exists, and that is 0. That is why we can't divide with this number. And if we would put nothingness on a graph, it would be a line that infinity from functions comes close to but can never reach it.`,
`And that is our meaning of life, our purpose, reaching for something we can never fully reach. Because this line 0 is our existence, experiencing itself.Are you ready to repeat every moment of your life for the rest of eternity?`
        ]},
        {id: 2, name: "DStone02", title: "Requiem for understanding", author: "Nihche", content: [
          `WHY?`,
          `This question is living rent free in the back of my mind. This  small void, that nothing can fill. The constant whisper of skepticism, that gives a feeling that nothing is really real.`,
          `This feeling caused a series of unfortunate events, where I was shown infinity and omniscience. And now I have to live with it.`,
          `The amount of information and their constant changing is too much for our brain. Even in simple day-to-day life, our brain has to simplify and fill in the missing information, so we can understand, or even comprehend our reality. I was made aware that our brain isn’t able to be omniscient.`,
          `But that won’t stop me from trying.`,
          `To achieve my goal, I will have to use a shortcut. I came to the conclusion, if omniscience is out of the question, I will just become all understanding. Same job, different title.`,
          `Just as scientists are looking for an equation that solves everything. I am looking for a state of mind that understands everything. And to do that I will create a story like no other. A story of everything.`,
          ``,
        ]}
    ],

      sContentId: 0,
      sTextId: 0

    }
  },
  methods: {
    showMeni: function(){
      this.sMeni = !this.sMeni
    },
    showProfil: function(){
      this.sContentId = 0
    },
    showContent: function(id){
      this.sContentId = id
      this.showMeni()
    },
    buyContent: function(id){
      if(this.cc >= 1){
        this.cc--
        let tId = this.fragments[0].content.length
        let tAuthor = this.fragments[this.sContentId].content[id].author
        let tName = this.fragments[this.sContentId].content[id].name
        this.fragments[0].content.push({id: tId, author: tAuthor, name: tName})
        console.log(this.fragments)
      }
    },
    openContent: function(name){
      this.sText = true
      this.sTextId = this.text.find(txt => txt.name === name).id
    },
    closeContent: function(){
      this.sText = false
    },
    nextContent: function(){

    },
    prevContent: function(){

    }
  }
}
</script>

<style scoped>
.botBCon{
  position: fixed;
  display: flex;
  flex-direction: row;
  bottom: 0em;
}
.scBtn{
  margin-left: 5vw;
  margin-right: 5vw;
}
.nextLast{
  display: flex;
  flex-direction:  row;
}
.cContent{
  background: radial-gradient(#c4c4c4, #312e3a);
  position: absolute;
  top:5vh;
  left: 5vw;
  height: 90vh;
  width: 90vw;
  overflow: hidden;
  border-radius: 4em;
}
.showCon{
  position: absolute;
  top:5vh;
  background-color: gray;
  height: 95vh;
  width: 100vw;
  outline: none;
  overflow: auto;
}
.itBtn{
  display: flex;
  justify-content: center;
  background-color: green;
  border-radius: 2em;
  width: 4em;

}
.cnt{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2em;
}
.itemContent{
  background-color: white;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.4em;
  margin-right: 0.4em;
  margin-top: 0.8em;

}
.rBtns{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.rouBtn{
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2em;
  background-color: whitesmoke;
  height: 3em;
  width: 3em;
}
.statsUnderTop{
  position: absolute;
  top: 2em;
  right: 2em;
  font-size: 0.8em;
  opacity: 0.8;
  background-color: whitesmoke;
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  padding: 0.2em;
  z-index: -1;
}
.mItem{
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 1em;
  height: 3em;
  border-top: 1px solid darkgray;
  border-bottom: 1px solid darkgray;
}
.mItem:hover{
  background-color: darkolivegreen;
}
.top{
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
}
.sideMeni{
  background-color: gray;
  height: 97vh;
  width: 98vw;
  margin-top: 3vh;
  border-top-right-radius: 2em;
  z-index: 2;
}
.topNavBtn{
  display: flex;
  height: 1.5em;
  align-items: center;
}
#iMeni{
  background-color: lightgray;
  width: 5em;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 2em;
}
#iMeni:hover{
  background-color: gray;
}
.top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: whitesmoke;
}
</style>
