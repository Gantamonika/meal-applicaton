<template>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <div>
    <!-- <div class="row">

      
        <router-link to="/">Home</router-link>
        <router-link :to="{path: '/Search/:idMeal'}">Search</router-link>
        <router-link :to="{path: '/RandomMeal'}">RandomMeal</router-link>
     

    </div> -->

    <nav class="navbar navbar-expand-lg navbar-light bg-purple">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        <router-link to="/" class="button-class navbar-brand" >Home</router-link>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> -->
      <li class="nav-item ">
        <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a> -->
        <router-link :to="{path: '/Search/:idMeal'}" class="button-class navbar-brand">Search</router-link>
       
      </li>
      <br/>
      <li class="nav-item">
        <!-- <a class="nav-link disabled" href="#">Disabled</a> -->
        <router-link :to="{path: '/RandomMeal'}" class="button-class navbar-brand">RandomMeal</router-link>
      </li>
    </ul>
    <!-- <div>
    <form class="form-inline my-2 my-lg-0">
      <div><input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></div>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div> -->
  </div>
</nav>
    <router-view />
    <!-- <div>
      <Footer />
    </div> -->
  </div>
</template>

<script>
// import Footer from "./components/Footer.vue";

export default {
  name: "App",
  // components: {
  //   Footer,
  // },
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
