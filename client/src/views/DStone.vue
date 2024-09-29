<script setup></script>

<template>
  <div class="top">
    <div class="topNavBtn" id="iMeni" @click="showMeni()">{{ meni }}</div>
    <div class="topNavBtn">{{ user }}</div>
    <div class="topNavBtn">Search</div>
  </div>
  <div class="statsUnderTop">14403NAV | 434DC</div>
  <div class="sideMeni" id="" v-show="sMeni">
    <div class="rBtns">
      <div class="rouBtn">1</div>
      <div class="rouBtn">2</div>
      <div class="rouBtn">3</div>
    </div>
    <div>Search</div>
    <div class="mItem" v-for="i in authM"> {{ i.name }}</div>
  </div>
  <div class="content"></div>
</template>

<script>
export default {
  data(){
    return{
      meni: 'Meni',
      user: 'Nihche',

      sMeni: false,
      authM: [
        {id: 0, name: 'Profile'},
        {id: 1, name: 'Tutorials'},
        {id: 2, name: 'D-Stone'}
      ]
    }
  },
  methods: {
    showMeni: function(){
      this.sMeni = !this.sMeni
    }
  }
}
</script>

<style scoped>
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
  height: 99vh;
  width: 80vw;
  margin-top: 1vh;
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
