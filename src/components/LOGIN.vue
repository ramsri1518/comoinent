
<template>
<div class="container">
  <form >
    
      <h1>form login</h1>
      <div class="form-group nme">
<label for="fname">email</label>
<input type="text" class="form-control"  placeholder="abcd@gmail.com">

      </div>
      <div class="form-group psw">
        <label for="password">password</label>
        <input  class="form-control" type="text"  placeholder="password">
      </div>
      <button class="btn btn-primary" @click.prevent="submit">sumbit</button>
    <button class="btn1 btn-success" @click="register">register</button>
    
  </form>
  </div>
</template>
<script>

//import useVuelidate from '@vuelidate/core'
//import { required,email } from '@vuelidate/validators'

export default {
 
}
</script>
<style scoped>

.container{
  background-color: cadetblue;
  margin: auto;
  border: 2px black solid;
  width: 400px;
  height: 400px;
  font-display: center;
  padding: 20px;
  border-radius: 10px;
  
}
.nme{
  padding: 10px;
  align-content: center;
  font-size: 30px;
}
.psw{
  padding: 10px;
  align-content: center;
  font-size: 30px;
}
.inbox{
padding: 0 0 0 5px;
}
button{
  border-radius: 8px;
  margin-top:20px;
 
  
}
.btn1{
float: left;
}
.btn{
  float: right;

}

</style>
