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
  	      <div class="itBtn" @click="openContent(c.id)">Open</div>
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
    <xText></xText>
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
        {id: 2, name: 'D-Stone', content: [{id:0, author: "Nihche", name:"DStone00"},{id:1, author: "Nihche", name:"DStone01"},{id:2, author: "Nihche", name:"DStone02"},{id:3, author: "Nihche", name:"DStone03"}]}
      ],

      sContentId: 0

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
    openContent: function(id){
      this.sText = true
    },
    closeContent: function(){
      this.sText = false
    },
    nextContent: function(){
      this.sText = false
    },
    prevContent: function(){
      this.sText = false
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
