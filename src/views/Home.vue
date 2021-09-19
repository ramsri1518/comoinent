<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
   <h1>myname:<b>{{Name}}</b></h1>
  
   <child  :getuser="getuserName"/>
  </div>
</template>

<script>

import child from '@/components/child.vue'

export default {

   components: {
    child
  },
  data(){
    return{
      Name:''
    }
  },
 
  methods:{
    getuserName(Name){
    this.Name=Name
    }
  }
}
</script>
<style  scoped>

</style>