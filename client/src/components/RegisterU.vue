<script setup>

</script>

<template>
  <div class="top">
    <div class="topNavBtn">Meni</div>
    <div class="topNavBtn">Register</div>
  </div>
  <input type="text" placeholder="user" name="user" v-model="user">
  <input type="password" placeholder="password" name="password" v-model="password">
  <button>Register</button>
</template>

<script>
export default {
  data(){
    return{
      user: 'Nihche',
      password: 'bird'
    }
  },
  watch: {
    user () {
      console.log('change commited')
    }
  }
}
</script>

<style scoped>
.top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: whitesmoke;

}
.topNavBtn{
  margin: 0.2em;
}
</style>
