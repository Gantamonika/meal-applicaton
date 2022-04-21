<template>


<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

 
    
    <nav class="navbar navbar-expand-lg navbar-light bg-purple">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ">
      <li class="nav-item active">
        <router-link to="/" class="button-class navbar-brand" >Home</router-link>
      </li>
      
      <li class="nav-item ">
       
        <router-link :to="{path: '/Search/:idMeal'}" class="button-class navbar-brand">Search</router-link>
       
      </li>
      <br/>
      <li class="nav-item">
        <router-link :to="{path: '/RandomMeal'}" class="button-class navbar-brand">RandomMeal</router-link>
      </li>
    </ul>
    <img src="https://www.thelogomix.com/files/imagecache/v3-logo-detail/cookbook6-06.png" alt="CookBook" width="110" height="60">   
  </div>
</nav>
    
    
<router-view/>
<Footer/>

</template>

<script>
import Footer from './components/Footer.vue';

export default {
  components: {
     Footer,
   },
  name: "App",
 
};
</script>

<style>

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
  font-size: 25px;
}
.button-class{
  margin: 2%;
  border: 2px solid black;
  padding: 5px;
  background-color: #ffe6e6;
  border-radius: 10px;
  font-size: 25px !important;

}
.button-class:hover{
  background-color: white;
  transition: 1s;
  color: #ff4d88 !important;
}
.bg-purple{
  background-color: #e91e63;
  
}
.navbar{
  height: 70px;
}
.nav-item{
  font-family: 'Brush Script MT', cursive !important;
}


</style>