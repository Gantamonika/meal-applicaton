<template>
  <div>
      <br/>
      <h1  >Yummy... Food !</h1>
      <div class="container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkXEWpoUheemO8LyO_1KMo3c8ijQi5-yvLlKHItV1opMyjHsIMLPOwqUC2iTm1VrVW5U&usqp=CAU" style="width:30%"  >
            <button class="btn" @click="getList">Get Meal</button>
        </div>
        <br/>
       

      <div v-for="item in recipes" :key="item.idMeal">
      
     <div class="car-marg">
       
          <div class="row" style="margin-top: 2%">
            <div class="col-sm-6">
              <div class="Mcard-body">
                <img
                  :src="item.strMealThumb"
                  alt="Trulli"
                  width="600"
                  height="433"
                /><br />
                <b>{{ item.strMeal }}</b>
              </div>
            </div>
            <div class="col-sm-3 d-flex">
              <div class="Mcard-body ing">
                <h5 class="Mcard-title">
                  <br />
                  <b>About</b>
                  <br />
                  <br />
                  <li>Meal Id: {{ item.idMeal }}</li>
                  <li>Name: {{ item.strMeal }}</li>
                  <li>Category: {{ item.strCategory }}</li>
                  <li>Location: {{ item.strArea }}</li>
                </h5>
                <br />
              </div>
            </div>
            <div class="col-sm-3 d-flex">
              <div class="Mcard-body wd">
                <h5 class="Mcard-title">
                  <b>Ingredients</b><br /><br />
                  <li>{{ item.strIngredient1 }}, {{ item.strMeasure1 }}</li>
                  <li>{{ item.strIngredient2 }}, {{ item.strMeasure2 }}</li>
                  <li>{{ item.strIngredient3 }}, {{ item.strMeasure3 }}</li>
                  <li>{{ item.strIngredient4 }}, {{ item.strMeasure4 }}</li>
                  <li>{{ item.strIngredient5 }}, {{ item.strMeasure5 }}</li>
                  <li>{{ item.strIngredient6 }}, {{ item.strMeasure6 }}</li>
                  <li>{{ item.strIngredient7 }}, {{ item.strMeasure7 }}</li>
                  <li>{{ item.strIngredient8 }}, {{ item.strMeasure8 }}</li>
                  <li>{{ item.strIngredient9 }}, {{ item.strMeasure9 }}</li>
                </h5>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="Mcard-body">
                <h5 class="Mcard-title">
                  <b>Recipe</b>
                  <br />
                  <br />
                  <h5>{{ item.strInstructions }}</h5>
                </h5>
              </div>
            </div>
          </div>
        </div>
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
.btn{
text-align: center;
}
.btn:hover{
  color:white !important;
}
.car-marg{
  border:  5px solid #B08F26;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  
}

</style>









