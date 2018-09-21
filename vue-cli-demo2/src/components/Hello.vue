<template>
    <div>
      <h2>{{msg}}</h2>
    </div>
</template>

<script>
  export default {
    name: "Hello",
    data(){
      return{
        msg:'welcome to my home'
      }
    }
  }
</script>

<style scoped>
  h2{
    color: red;
  }
</style>
