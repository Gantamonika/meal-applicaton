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









<!--
 <template>
    <div>
        <div>
        <h1 >Yummy... Food !</h1>
        <div class="container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkXEWpoUheemO8LyO_1KMo3c8ijQi5-yvLlKHItV1opMyjHsIMLPOwqUC2iTm1VrVW5U&usqp=CAU" style="width:40%" >
            <button class="btn" @click="getMeal">Get Meal</button>
        </div>
        <p class="item" v-for = "item in recipes" v-bind:key="item.idMeal">
            <table>
                <th style="text-align:center"><img :src="item.strMealThumb" width="600" height="433" /></th>
                  <h2 align="center"><span style="font-weight:bold;">{{item.strMeal}}</span></h2>
                <tr>
                    <th>About</th>
                    <th>Recipe</th>
                    <th>Ingredients</th>
                </tr>
                <tr>
                    <td style="padding-top: 5px;border-top-width: 2px;">
                        <li>Meal Id:{{item.idMeal}}</li>
                        <li>Name: {{item.strMeal}}</li>
                        <li>Category: {{item.strCategory}}</li>
                        <li>Location: {{item.strArea}}</li>
                    </td>
                    <td><li>{{item.strInstructions}}</li></td>
                    <td> <li>{{item.strIngredient1}}, {{item.strMeasure1}}</li>
                        <li>{{item.strIngredient2}}, {{item.strMeasure2}}</li>
                        <li>{{item.strIngredient3}}, {{item.strMeasure3}}</li>
                        <li>{{item.strIngredient4}}, {{item.strMeasure4}}</li>
                        <li>{{item.strIngredient5}}, {{item.strMeasure5}}</li>
                        <li>{{item.strIngredient6}}, {{item.strMeasure6}}</li>
                        <li>{{item.strIngredient7}}, {{item.strMeasure7}}</li>
                        <li>{{item.strIngredient8}}, {{item.strMeasure8}}</li>
                        <li>{{item.strIngredient9}}, {{item.strMeasure9}}</li>
                    </td>
                </tr>
            </table>
            </p>
    </div>
    </div>
</template>
<script>

import Axios from 'axios';
    export default {
        name: 'RandomMeal',  
        data(){
            return {
                meals: [],
                loading: false,
                err: '',
                strMeal:'',
                recipes:{},
            }
        },
        created() {
            this.getMeal();
        },
        methods: {
             getMeal(){

                this.loading = true;
                console.log(this.strMeal);
                Axios.get("www.themealdb.com/api/json/v1/1/random.php").then(response => {
                    console.log(response.data);
                    this.meals = [response.data.meals[0]];
                    this.loading = false;
                }).catch(err => {
                    this.loading = false;
                    this.err = 'Something went Wrong';
                    console.log('Error', err);
                });
            }
        }
    }
</script>-->