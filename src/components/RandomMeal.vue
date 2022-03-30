<template>
  <div>
     
      <h1  >Yummy... Food !</h1>
      <div class="container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkXEWpoUheemO8LyO_1KMo3c8ijQi5-yvLlKHItV1opMyjHsIMLPOwqUC2iTm1VrVW5U&usqp=CAU" style="width:80%"  >
            <button class="btn" @click="getList">Get Meal</button>
        </div>
      <div v-for="item in recipes" :key="item.idMeal">
      
      <h2>{{item.strMeal}}</h2>
      <h2>{{item.idMeal}}</h2>
     
      </div>
  </div>
</template>
<script>
import Axios from 'axios';
export default {
    name: 'RandomMeal',
  data() {
    return {
      meal: "",
      recipes: [],
      // youtubeVid: ""
    };
  },
  methods: {
    getList() {
      Axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => {
            console.log(response.data);
          this.recipes = [response.data.meals[0]];
         
          // this.youtubeVid = [data.body.meals[0].strYoutube];
        });
    },
  },


};
</script>
<style>
h1 {
    text-align: center;
    color:gold;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font: size 100%;
   
}
.container{
    text-align: center;
    margin: auto;
}

</style>









