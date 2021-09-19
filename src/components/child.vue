<template>
<div>
  <h1>vue</h1>
  <button v-on:click='getuser(Name)'>click it</button>
  </div>
</template>

<script>
export default {
  data(){
   return{
     Name:'ramsri'
   }
 },
props :{
   getuser:Function
  }
}
</script>

<style>
button{
  color: rgb(11, 197, 151);
}

</style>
