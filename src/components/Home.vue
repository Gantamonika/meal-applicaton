<template>
    <div>    
        <div>
              <button class="btn" @click="getList">Categories Available</button>
        </div>    
              <ul >
                <li v-for="item in recipes" :key="item">
                     {{ item.strCategory }} </li>
                   
            </ul>
    </div>
  
</template>
<script>
import Axios from 'axios';
export default {
    name: 'Home',

 data() {
    return {
      meal: "",
      recipes: '',
      // youtubeVid: ""
    };
  },
//   created(){
//     this.getList();
//   },
  methods: {
    getList() {
      Axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
        .then(response => {
            console.log(response.data.meals);
          this.recipes = response.data.meals;
         
          // this.youtubeVid = [data.body.meals[0].strYoutube];
        });
    },
  },


};
</script>
<style>

</style>