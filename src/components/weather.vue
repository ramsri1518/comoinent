<template>
  <div class="container">
    
   
      <h1>my weather</h1>
    <div class="searchbox">
       <input type="text" class="bartag" 
          placeholder="search a weather?...."
          v-model="query"
          @keypress="fetchcode">
    </div>
     <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div  class="locdetail">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuitelder() }}</div>
        </div>

        <div class="weatherdetail">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weather">{{ weather.weather[0].main }}</div>
         </div>
      </div>
  </div>
 
</template>

<script>
export default {

  data (){
    return{
    key:'5299e83c9cf2fef510fb8ddaa3206ac8',
 apiurl: 'http://api.openweathermap.org/data/2.5/',
query:'',
weather: {}
        }
    },

 methods: {
    fetchcode (e) {
      if (e.key == "Enter") {
        fetch(`${this.apiurl}weather?q=${this.query}&units=metric&APPID=${this.key}`)
          .then(res => {
            return res.json();
          }).then(this.setResults);
      }
    },
    setResults (result) {
      this.weather = result;
    },
dateBuitelder() {
   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d= new Date();
let date= d.getDate();
let day=days[d.getDay()];
let year=d.getFullYear();
let month=months[d.getMonth()];
return `${date} ${day} ${month} ${year}`;
}
}
}


</script>

<style>
h1{
  color: rgb(18, 238, 238);
}
.container{
    
    min-height: 100vh;
    text-align: center;
    font-family:'Times New Roman', Times, serif;
    
}
.bartag{
padding: 10px;
text-align: center;
width: 70%;
border-radius: 42px;
color: rgb(93, 85, 168);
font-size: 25px;
}
.locdetail{
  padding: 20px;
  font-size: 49px;
  font-weight: 300;
  color:rgba(80, 79, 74, 0.836);
  

}
.weatherdetail{
  font-size: 60px;
  font-weight: 550;
  width: 220px;
  margin-left: 40%;
  background-color:rgba(161, 150, 129, 0.829);

  color: aliceblue;
}

</style>