<template>
  <div class="search">
            <br>
            <input type="text" v-model="search" placeholder="Search Meal.."/>
            <button @click="getMeal">Search </button><br/>
            </div>
    <div>

       
     <div>
    
        <div>
           
           
            </div>
            <p class="item" v-for = "item in meals" v-bind:key="item.idMeal">
                 <table>
                 <th style="text-align:center"><img :src="item.strMealThumb" alt="Trulli" width="600" height="433" /></th>
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
        name: 'Search',
        
        data(){
            return {
                meals: [],
                loading: false,
                err: '',
                strMeal:''
            }
        },
        created() {
            this.getMeal();
        },
        methods: {
             getMeal(){
                this.loading = true;
                console.log(this.strMeal);
                Axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+this.search).then(response => {
                    console.log(response.data);
                    this.meals = response.data.meals;
                    this.loading = false;
                }).catch(err => {
                    this.loading = false;
                    this.err = 'Something went Wrong';
                    console.log('Error', err);
                });
            }
        }
    }
</script>
<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 0px;
}
th{
    text-align: center;
     padding-top: 20px;
}
td{
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 40px;
  text-align:initial;
}
p{
    text-align: center;
    width: 100%;
    padding-bottom: 30%;
}
h2{
    text-align: center;
}

img {
  border-radius: 12px;
  
}


.container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.container img {
  width: 100%;
  height: auto;
}

.container .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.container .btn:hover {
  background-color: black;
}
</style>