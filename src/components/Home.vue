<template>
    <div class='bg-colour'>    
        <div>
          <button class=" bttn" @click="getList">Categories Available</button>  
          <button class="btn bttn" @click="getArea">Area</button>    
        </div> 

        <ul >
          <li class="sie" v-for="item in recipes" :key="item">
            {{ item.strCategory }}
          </li>                  
        </ul> 

        <ul >
          <li class="sie" v-for="areas in area" :key="areas">
            {{ areas.strArea }}
          </li>                  
        </ul>  

       
           
              
    </div>
  
</template>
<script>
import Axios from 'axios';
export default {
    name: 'Home',

 data() {
    return {
     
      recipes: '',
      area:'',
      ingr:'',
     
    };
  },

  methods: {
    getList() {
      Axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
        .then(response => {
            console.log(response.data.meals);
          this.recipes = response.data.meals;
         
    });
    },
    getArea() {
      Axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(response => {
            console.log(response.data.meals);
            this.area = response.data.meals;
            });
    },
 

  },


};
</script>
<style>
.bttn{
   margin: 2%;
  border: 2px solid black !important;
  padding: 5px;
  background-color: #ffe6e6 !important;
  border-radius: 10px;
}
.bttn:hover{
  background-color: white;
  transition: 1s;
  color: #ff4d88 !important;
}
.bg-colour{
  /* background-color: #ffcccc; */
  background-color: #fcfc03;
  
  margin-top: 9px;
  text-align: center;
}
.sie{
 font-size: 150%;
}
</style>