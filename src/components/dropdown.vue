<template>

<div class="container">
    <h1>select for route</h1>
   
      <select >
          <input class="form-select " type="dropdown" @onchange="onchange($event)">
          <option >select ur file</option>
      <option value="zero">calculator</option>
      <option value="one">weather2</option>
      <option value="two">music</option>
      <option value="three">parent1</option>
  </select>
  </div>


  

</template>

<script>
export default {

}
</script>

<style  scoped>

</style>
