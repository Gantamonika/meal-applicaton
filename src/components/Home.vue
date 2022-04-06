<template>
 

  <div class="bg-colour row">

<div class="flip-card left col-sm-5" >
  <div class="flip-card-inner">
    <div class="flip-card-front">
     
    <img @mouseover="getList" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSEhIYGBgYEhgYEhEYERkZGBIaGBkZGRgaGRgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjEsJSs0NDQ0NjE0NDQ0NjE2NDQ0NjQ1NDQ0MTY0NDQ0NDQ0NDQ0MTQ0NDQ0NDY0NDQ0NDQxNP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIDBAUGBwj/xAA4EAACAQIEBAQDBwMEAwAAAAABAgADEQQSITEFIkFRBhNhcYGRoTJCUmKxwfAHFCMzktHhU4Lx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAgICAgEDBAIDAQAAAAAAAAECEQMhEjFRBBNBImFxgTJCkdHwBf/aAAwDAQACEQMRAD8A+hQhCeEeiEIQgAQhCABCEIAWUapU+nUTcrAi4nNl+GqWNjsfoZ0YctPi+iJxvZtihCdhkEUlaLLGFihJWiMAFCF4oDCEIQAIQhAAj8tvwn5TVQpWFzuZfNFEylkp6ObCa69K4uNxMkmUaNIy5IUIQiKCKEIAEIQgMIQhADBCEJ5JqEIQgAQhCAEkQnaWjD9z9JYgsB7Sc3jjVbM3JlS4dfWWrSUdI7wB63msYxXwJtssEYiECZsiB3heQ9vYfuY1EpColE20cG2lDKrx3lYMAYii0R2kQY80dCHaLLGD3jhQG1XB6yV5hEsUzVMxcDUZzbzUxuLEylqYilsqCoqhGVtIzM1HCKOAwhCEACEUIAYYQhPJNQhCEACEIjADXSPKJZKcMdPjLp1RdpGUuxMf5+kkF6D4zx2P4jj3r4mlRHJSDgMtIApfDCpTcOXOZy5C5clrX10ixgxldGJpAuEqKhVDTDhqdLE0SC7HL/kXyzc7rfTabKJHI9ktS/xNgOsyvxKl5fmBwy+W7rl+06oCXyKdSdJ5x+EY+q7h6gyMXPNiGKVF89KlNQigFF8tSja31+9rezA+DsjU3eqCUZiUCOVCmrUqoqXfly+ay3Ia4A0B1lpLyJvwjocR8TYamrkOGZKTOafMNFQVGXNYgPku2XcgXtbWZ8b4oSmS4R8q06uam6BCr0zTazMW5RkqB/skZbm4taSwfhKkjEOzPTCIqI7nVlw/9s7uBYMzU+W/qfSdqngaanMEUXNyctzfIKd7n8ihb9QJWhbM3A+J/wB1TZyEBSq9MhKmdOQ6FXsMwIIO06ciAALAWA2AFgPhHGMyE2NvWSUyuvoxghgjQvzW1PxMYcdxrtrveYuI0XqUalJHyM9J0VyL5CylQ1utr3tPO1eCVsKHqUaisEINPzDfy6dGhW8lHJBzZa1Qc24XUnTWkiXo9kDJTxWCx+NdVqqHqLmqCkzoqluahSQ1DQORlLPWe4UjKl9La9ZOKvSp16uIBC08QlPk1AXLSVnTlDFc7tocx5TY7CFE2j0Aks1p5ceLqGRagV8mWq9QsrZkFFELqoVTmZXqIhBIsc2pykTpYLi9GtUekj3emVDo3K1iiPmCHWwFRQSRobiUGmdUEn+bxkyvOL2jzesAoTnSVAyVQ6SEhlolCREYMQyUUIQAIQhADDCEJ5JqEIQgARRxQAuwx1ImmY8OeYTZN8b+kzl2RRLe53PftLJESQmyJMuPxD0wjIuYGoquApZsrXHKARre2pOnrtMmHq4oupKm3+RHXy8icrPkcZmzEFcmmo1OonWEleaJkNGbAisFPnFCxIsEBsBYXGu+t/5oNMqbEou7AfGQGOpf+Rf90rkvJSjLwaZRXrBFLNsB8/QesmlQMLqQR3BvMnEKdzTNgQKqhgToQ2n7iKbfG0OKV0zLTxTVCSUK2NgCpFx033mimZDFVnZyCoCC4B+8GB1za6AixAkkOkqCaVN2O09pUXrLFlKmWrLEy0GYXx9PMyvdctREGYL/AJGcjKEW5J162G19hebBM1Th9FjmakhbOHD5RmDjZg299I0L8FeK4Vh6ilXprbI6ct1IFRg9TKVsQWZVYka3F5ClwqklXzhmzZaguXJv5rU2cm+t/wDEgHoJdhsIlLNkBGYi4LEjS+19tzLS0Y1E8qvhJ6aKlLFOv+QtUZWNNn0Cq5PMGqDU6gBidbWnoODYQ0aQRrFjUqO5BJGarUeo1iQNLvb4TVmjzRjUaCo0obFoOt/bWYsZUJYi+g6SkSaNY41Wzecd2X5mR/vW7D6zGJKOkXwj4Ni41vwj6yYxo6gj21mGOFBwidL+5X8UJzYRUT7aNUIQnjiCEIQAIo4jABIbEH1E6E5pnQQ3APoJtifaImSEHcKLk2EDOQ9J67i5yob2tqTY2tbaauTjSirbFCKe26SJ4riTG4Qqot9s8302HznAq1g7EmtUc+wt8BYCd1+GIAVzMAToLrzd+l9ukyYTh1PPmSqWLqcoIRhaxDevQjS0mWLM2rSOnHmwRTpnFxWKy3XK5+QP0AM5dWu7mwLJ2BWwm7G8GcOVOmuhJ9bS138sBCNgA1xfQ9Qes43ycmpKj04Sgopw3ZLgeIai4Zm0O9jcNPZ4qoDTzdAFb5EH9p87WmVOU6i97jQL7ehnueFEVMPlfUaqQeo3/edHpm1cPtr8nF62KtTJVanO6sLaK6G/2wbBvexX6iSSY8TjXpEJ5fmKNAxPMo/Q9O201LPQi7OHi0vt8GLFY1/M8um6qwGYowsXU9VNjp+9tZTiMZXQjJfMSORrMrfLVeutt5X4n4YtakaljnQZlYb2GpA/XuJ57hnHPKXPVYMwstMuzXa2xa9zbUC/xnNlnKNxXb6O7FhjLHzVOu0/P+j2+Hxz6CpTIvYZlOYXtr6j5GdEz5Pxfxbj8W3k4RlpIwAzKtnzXOZMx0vbta1jrLPBvivEUmeji3zqjFQHNnDZiCAxFjsdCfadUIyS+pnmynFy0q/B9QYyBMpwmLWsmdAwH5lsflLDLTT6NEh3izCef8TcSqU8qU+XMpZqltQBpZfWeYweLd6iqWYlmF7uTpfqdybD2mGT1CjLilbO7D6KWSHO6R7J2uxPcmAiEYnQZEhJCREkIAMRxCEAHCKEANcJvqUFb0PeZXoMPX2/4nlSwyj9znU0yqECITIoIjHAKTsIAQM2YY3QfKUrhmO+kpxnEKeGKq17MxANxYEb7n6CbwhJfU9IVOb4x2zokTLgCShBFsrED23tLcJiUrLnRgRe1x3HSU0CRUdPu2zeoJt/PlNoupxf5X+TNp8Wmto6aIF2A+XXrOTisKjHOVGYBgHGjqGBDZWGo36GawxGsSUjUp5gQpOb1AsSP2nTJ8ujjODhgamDCozPkzIXdrvyMR9s6sdALnXTW5nCxJs2R+o5WP3W6j2M9Xwzh5p0zTJuBnB1FyS17n5med4zSDZbDmFxr962lvfQTi9XDan89Hrf+fPTiznLUJOVtCLge/UGeq8L1rqydtf2P7TyGcMPzKN/xgfuJv4LxujRqKKlVFJ5bF1zMD+W9yb2mOKVTTOv1MLg0e5egp6TGwykjsZtoYhaihlYEHYzLihzn1AM9KJ5atOmRYK6lW1BBBHcHQz5Z4/4G+GamabXVmYqug+zYi+n5jrPomJLLqJ5vxy5xFNGpoSULF1tqLgDTvt0j4RbTfaLcpxg1F6fZ4PhnEPLGc2U3PL94HlW622JFth3nY4c71FVxTUgFlXM1iFZiSx0sWO5uSd+8wcPw4qVEplebzApB0P80nvKfhxQp8trHdgVuuY2JOsWaUkqihelWLleR/g4GE4nWpBfKJBQt5hLWUXPILkc5IBPwns+A8XNYZals1rgjrPK4nguJWpnVMy/eK8w1+8FAAB+ElTxLUmDjNdSCdNNOk8+WR45xa/a8ntTxY82P6ab8/J73E01ZSrqGHYzipwugGFRFsysb2vrcW1B+c7VCoKiK42Kgj4i8zYmmFNx1/aei4RlUjy4zlF8U2vJQJIRCMTQokJISIkoAMQhCABCEIAd+EIpicIiL7yJpr+EfKTiicU+x2RFNfwj5SUIRpJdBZFpwfE+AesqKl7iqLkMRYFTqbdiF7TvGVvFKKkuLLx5HjkpLtGXhWD8mmEzFjuzHqepicotbMWtdco10Jv19JqQ31kK9HNvuNj1HsZnPEkkl8VQo5HJuUn3dkqqm1hKqKFkCgsqg6C9mJve5t3PTbWU1FqDQVG+h+ttZQHqqLLU67lFJ+dpspRu6MvZb6aOnlCXAG+t9z2njuNVldGdD9mpvtrYbfzpO69bEH76/wCwaznvw7MbtY63tbT5TD1EZZEoro6/S1ilykfMPHWMcUqZUFVqMwe2l8gWwB7HMT8J5HEcMqJQp4glclR2VV8xc91Cm5S97WYa297XF/sPjXwy2Lw4SkRnVsyA7NoQQT0uDv6CfOsL4A4nU5fKCrfdqq5b+wJP0mnp5QhHg3tGXqnPJPkuvg+i/wBLuINUwIzEkpUZCSdbCxX6ED4T0fF8f5VWmW+xUVlZvwspBX5hm+QmTwX4b/sMMKROZixeowFgWNhYegAAnV41gi60yo1SsrH2sVP6xtP+v/bNMco8ly8UxoVqLcEEEaEG4PxnPxOFE1YTCLTN05b7oPsknrl6H2tNNSmGE0V1sdqL10eRxPC0NVKhFijg5wNbX1v3nrsMEZBkII9P0MwVqHQiZRTdCSjEX3HQ/CNaCUFPa7O6NNuugRRcm3YCcni+EwzKfOV6f4qnlso/9mAy/Emdnw4SVJa182UW7AX/AFb6CdCjVNXNmpMo+zZ7Xb8XKL8vS99deliT24SX1IxWV4p/P6OHwzD+VRVA2YC9m7gm6/QyOMbmA7CHCaWSiFG2Zig7KXYoPgpWV4hruff9JSio6XwdP93uyIjEQjECiUYiEcAJQijgAQhCAHehCExOEIoQjAIQhACJlbSwyDQGc6rj8p8tBmfTN2Uevr6Tfh6mYazPSwCrcqLXJJ9ybma6VPLE7bHUUqQ3p3maph5ugRChKVHKNEwFAzqBL7CSFD0jUR+4cxcKZcuGAmwUze1tZb5Kjck+0FEiWRLsyKgEhiBdD7fprNqZDtqO4a8QpgMQdRYkS0vAlkT6OGplqmJ0FtN72tJ5FGhbX2jo25IToCNZiq4YjadEUr7MD6bStlN7W17R0XGRnwZekSUIKtqytffa4I2M3VMa7KQAFJFiwYsR7Cw1/msoyEdCPhCNaG1GTtrYkUKABsBYDsBOcTc3m+s1lPtOeIjSPkkIxEI4FEhGIhHABwhCABCEIAd+KEJicIQhCMAjRC20iZfTPJp31jirYpOkR8gfeI9hDyk7kzLVrEsUU2t9put97CSOZBmLZh1Bte3UggdO0fKKfQq+5oeiFAIOkmKPc/AQvyn0N5TxCsyU2dBchbjS9u5t1sLm3pCSS2Rb6NARex+ciyC4tsTPO1OMIWVadRy5ICi5s5PTKRY+ttp6N/s+xiTTCnFq/krxOICAliAB8Jyhx+iTa7e+U/8A2aONYA1bWO2uUnlP/frMfDeEeW5csSMtgpsSDfcG1x23M5skszycYql5Z1Y44vb5Se/B3Q1yrdxaec8W+IkwYCNmzOjFSB+HSw9Sf0noWuFB7GZeK8Fo4rKaqZspupBsRfcXHSdMoycaRw5Fa0eW8FcRLIvmU38x2cvUK8rrmZgxO3WwntGPMp7i0rXBU0scqrlACkaWGwEtxIsAR0YRYccoJ2xxrSSrVfs5OIW1TL+YmcPxDjKlGn5qG1msxIBAuRYm/S+nxE9FxFbVcx28u9/Ym/0mIUkqLYMrqRtowI7HvNJxbWjsxSiqbOb4c4s+JDB0CspGoOjX62+G4uPWegpnnY9rATFw3hqUeVBlXNmC3JC33C32HW01UgSjEGxLHXt6wgmlsWWUXbj0c4eKsLnKGqVIYqSyMFuDY81rWnXYK6k6HluGHtvcbzxFTwZUL2WohS2rsDmudxlG/TW/Weo4XgThsN5Wcva4ViLWDG+UDsNZUW/k54/yVMjjEC0wSdWbQen8E54m/ixtlXsswiDPQx/xsYjiEYiNCUYkZIQEEcUIAOEIQA70IQmRwhAwiMAEZdhzcEfGUmW4U627iVHsUujFVARyW0ViDm6A7EHt/wBydSuHXIhuSCLg3Cg6FmI026dZ0TQ7GAogbn9o/b2TyiRoi9x6RILqPa0upFSLqQQeoNwfjKaTAEgnZjLa8kXdlVHh1JHLpSRWO7hFDHvqBNTryn2mKpgqTVDULMSSpt5r5QVtayg26A29+80vWFrCKooSTbJgAqCRew26m0wrjKrC6YV+li7In0uT9JfTq20Eka7fwQUolOEixySnMADYXANwD2B6yqoFqIFzldVN1bKdCDa/Y2lbOTuZAxct2Uoaplb8Pw27Zqh/PUd+x2Jt0l1aquUKosotb0A2AEqMiYOTYKCRTjax5SdbXHuP4JiNGi32qa37hbH5rrI+IuILhsM9dlZlTKWVbXsWC3106zy2F8eYF/tF0P5qZI+aXji2bRUa2eyTy0uVZtVsFLsVHsDoNpswbDKLfGcHAcRo4hc1GorgGxytcr7jcfGbFMdlcE1SOlRNTNZ0S2vOrG/W3KR7dZPFbKvdhMC13H3jGajE3J1G0dkrE07KOKveofRQP3/eZBLsWpLF+519JSIHVBVFIYjEQjEChxxRyRDhFCADhCEAO/CEJkcITl4pXz6X35bX+k6cDGnRUXTIC9hfe2slSazA+sRkTAXZtxVAVEKkkAkG4I6EHqCCNNQRYiYhwLDCxdS1gAM9RmAsCNATYb9Isx2ufnINNPcM/a+5tWrSpIFQAKosqqNAOwtoJSWzG/fWZCJopHQSJSbLUFHomJISDuBvJI1xeIDDxvi9HB0GxFd8qL21Z2OyqOrGfK+If1irMSMLhEAvytUZnNvVUy2PxM3f11d/Kwqg8hqVCR3YKoU/It858icMbWuRlFgL221+s0jFVZlKTuke9qePeN1CrA00vqiCnTUv15VY5m+E9z/TzxyeI5qFdFTEIpblBCVEBAJAJOVgSLj1uOoHyjEFWFQhKZL1VqJimrKDSGhKlDzaWYZR32NlseGuOLheKLibnyzWYObH/TckMbb6A5rekpxVExk0z9GmQDX/AJvGlRXUOjBlYAqwNwwOoIPURZRMToM+Pp56TqFViUayOLqxtcBgdxe0+ReJ8PTXErTXD0aJ8stU5LISoLXAUga7aa6ifTPE9equGqJh1zVXQogzquTMLF7k20F7DvafIK/DMfTBz0ahHUsgqjte/N6fKaRRW66LfDmKahjKDU7qKhRXQE2K1Gyka9NmF720n2MT4fw/FeXiqVWrfkrIz3FjZWF9PQDb0n26m4YBlIIIBVhqCDqCD2jZWPompkxK0Sx3/wC5MxGoSmpQ6r8v+JcI4CTaMVrbwm1kB3EqbDdj847LUkURyw0G7fWLym7GIdohCTFFu0muGbrYQHyRTCav7UdzCAuSOtCEUyOMIGEDABSJkzIxjIESJEmRIkQGVsJZhzpaRYSskjaAVZrZAZJVsLCY2xD+nymerUZhYm4O46H3EKDiz5d/V3iv93Wp4XCqavklzVampcB2sMgK31UDX1a3QzxmE8HcRqDlwrqD1f8Ax/RiD9J96VAosoAHYCw+QkGEtSrRPspu2z5Dhf6Z4tj/AJKtJB15mY/ILb6zsYX+mFEf6uJdu+RFT6tmn0QiRIhyZawxXwcvgfCkwSZKFSqF/A1ZmW53OT7I+AnUau7buT8YrRZYjRRS6RG0msAJICMojUoo4s6Kw7MoP6yeFoJTXLTUIv4VFlHsuw+Ekok1EYFivJXvIqJIQJJCMRRiAEhGJERiADkryMIATjkJKADhFCAG6EITIwCBhCAAZGEIxiiMIQGRaVPCEBlbSloQgUitpUYQjKRAxGEIyhQhCADjEIRgTEmsIRiZMRwhARKOEIAMRwhABxiKEAHCEIAShCEAP//Z" alt="Meal Category" style="width:300px;height:300px;"/><br/>
    <br/>
     <b><i>Categories Available</i></b>
    </div>
    <div class="flip-card-back">
      <ul class="sie" v-for="item in recipes" :key="item">
        {{ item.strCategory }}                 
      </ul>
    </div>
    
  </div>
</div>



<div class="flip-card right col-sm-5" >
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img @mouseover="getArea" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8hvEdKaNK250NOYsghaYRZsN2jMUWTTALw&usqp=CAU" alt="Areas" style="width:300px;height:300px;"><br/>
   <br/>
   <b><i>Area</i></b>
    </div>
    <div class="flip-card-back">
      <ul class="sie" v-for="areas in area" :key="areas">
       {{ areas.strArea }}
                           
      </ul>
    </div>
  </div>
</div>





        <!-- <div class="row">
          
          <div class="col-sm-6 d-flex align-items-stretch">
            
            <div class="Mcard al">
              
              <div class="Mcard-body ">
                <h5 class="Mcard-title"><b>Categories</b></h5><br/>
                <div class="clr">
                  <ul class="sie" v-for="item in recipes" :key="item">
                    {{ item.strCategory }}                 
                  </ul>
                </div>
              </div>
            </div>
          </div>
          

          <div class="col-sm-6 d-flex align-items-stretch">
            <div class="Mcard alien">
              <div class="Mcard-body">
                <h5 class="Mcard-title"><b>Area</b></h5><br/> 
                <div class="clr">
                  <ul class="sie" v-for="areas in area" :key="areas">
                    {{ areas.strArea }}
                           
                  </ul> 
                </div>
              </div>
            </div>
          </div>
        </div> -->

        
        <br>
        
      </div>

   

    <!-- <div class=" container" id="card" >
        <ul class="sie" v-for="item in recipes" :key="item">
            {{ item.strCategory }}                 
        </ul> 
        </div>

        <br/>
        <br/>

        <div class=" container" id="card" >
        <ul 
           class="sie" v-for="areas in area" :key="areas">
            {{ areas.strArea }}
                           
        </ul>  
        </div> -->
  <!-- </div> -->
  
</template>
<script>
import Axios from "axios";
export default {
  name: "Home",

  data() {
    return {
      recipes: "",
      area: "",
      ingr: "",
    };
  },

  methods: {
    getList() {
      Axios.get("https://www.themealdb.com/api/json/v1/1/list.php?c=list").then(
        (response) => {
          console.log(response.data.meals);
          this.recipes = response.data.meals;          
         
        }
      );
    },
    getArea() {
      Axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list").then(
        (response) => {
          console.log(response.data.meals);
          this.area = response.data.meals;
        }
      );
    },
  },
};
</script>
<style>
.bttn {
  margin: 2%;
  border: 2px solid black !important;
  padding: 5px;
  background-color: #ffe6e6 !important;
  border-radius: 10px;
  margin-right: 5%;

}
b{
 font-weight: 900 !important;
 font-size: 50px;
 color:#b08f26;
 font-family: 'Brush Script MT', cursive;
}
.bttn:hover {
  background-color: white;
  transition: 1s;
  color: #ff4d88 !important;
}
.bg-colour {
  /* background-color: #ffcccc; */
  background-color: black;
  height: 2500px;

  margin-top: 9px !important;
  text-align: center;
}
.sie {
  font-size: 150%;
  font-family: 'Brush Script MT', cursive;
  font-size: 40px;
  
}

  

#card {
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  width: 300px;
  border-radius: 10px;
  background-color: #ffb3b3;
  text-align: left;
  max-width: 500px;
  margin-left: 500px;
  box-shadow: 0 4px 8px 0 #ffe6e6;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
  
}
.col-container {
  display: table;
  width: 100%;
}
.col {
  display: table-cell;
  padding: 16px;
}
.card{
  background-color: #ffb3b3 !important;
  margin-left: 200px;
  padding: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
  
  
}
.card-text{
  text-align: left;

  
}
/* .alien{
  margin-left:80%;
} */
.al{
  margin-left:75%;
  text-align: left;
}
.alien{
  margin-left:10%;
  text-align: left;
  
}













/* monika */

.heading{
  text-align:center;
  font-size:2.142em;
  font-weight:600;
  letter-spacing: -0.13px;

  width: 100%;
  color: #ffb3b3;
  line-height: 1.5;
  box-sizing: border-box;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-bottom: 0px;
}

.Mcard{
  background-color: #ffb3b3;
  color:white;
  border-radius: 5px;
  border-style: none;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.2);
}
.Mcard-body{
  background-color: #ffb3b3;
  color: white;
  padding: 30px;
  margin-bottom: 10px;
  border-radius: 5px;


}
.Mcard-body1{
  background-color: #ffb3b3;
  color: white;
  border-radius: 3px;
  padding: 30px;
  border-radius: 5px;
  margin-bottom: 10px;


}
.Mcard-title{
  font-size: 20px;
  font-weight: 400;
  color:#b08f26;
  text-align:center;

}
.clr{
  border-radius: 5px;
  /* //  background-color: #e91e63; */
  border-radius: 3px;
  /* //  background-color: #e91e63; */
  margin-left: 20px;
  margin-right: 20PX;
  margin-bottom: 20PX;

}
.Mcard-text{
  margin-left: 15px;
  margin-right: 15px;
}
.title{
  font-size: 20px;
  font-weight: 400;
  color:#B08F26;
  text-align: center;

}
.text{
  margin-left: 15px;
  margin-right: 15px;
}

.Mcard-body-MCB{
  background-color: #000;
  color: white;
  border-radius: 5px;
  padding: 30px;
  width: 550px;
  height: 332px;
  margin-bottom: 10px;
}

.Msection{
  font-size:16px;
}


#division{
  text-align: left;
  margin-left: 0;
  background-color:indigo;
}








.flip-card {
  background-color: transparent;
  /* width: 300px;
  height: 200px; */
  margin-top: 5% !important;
  margin-left:5%;
 
  /* border: 1px solid #f1f1f1; */
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 10px;
}
/* Style the front side (fallback if image is missing) */
.flip-card-front {
  
  color: black;
   width:300px ;
  height:400px;
  margin-left:35%;
 

}

/* Style the back side */
.flip-card-back {
  background-color:#e01c5e ;
  color: black;
  transform: rotateY(180deg);
  height: auto;
  width: 50%;
  
}



</style>
