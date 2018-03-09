<template>
<v-app>
  <v-container fluid>
  
  <v-jumbotron color="blue">
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>

<div id="app">

        <div class="column">
          <div class="title">
              <i class="fas fa-home"></i>
            <h2>Basic</h2>
          </div>

          <div class="price">
            <h4>₹ <span>999</span></h4>
          </div>
          
          
          <hr class="costDivide"></hr>

          <div class="option">
            <ul>
              <li>Feature 1</li>
              <v-divider></v-divider>
              <li>Feature 2</li>
              <v-divider></v-divider>
              <li>Feature 3</li>
              <v-divider></v-divider>
              <li>Feature 4</li>
              <v-divider></v-divider>
              <li>Feature 5</li>
              <v-divider></v-divider>
              <li> - </li>
              <v-divider></v-divider>
              <li> - </li>
              <v-divider></v-divider>
              
            </ul>
          </div>
          
          <v-layout align-center mt-4 ml-5>
            <v-flex xs12 sm4 text-xs-center>
              <div>
                <v-btn round large absolute color="blue darken-3">Buy Now</v-btn>
              </div>
            </v-flex>
          </v-layout>
          </div>

   
  
  </div>


  </v-container>
  </v-app>
</template>


<script>
export default {
  
}
</script>


<style>
.column{
  border: solid black 2px; 
  width: 300px;
  position: absolute;
  height: 700px;
  margin-top: -133px;
  margin-bottom: 250px;
  margin-left:100px;
  text-align: center;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.7);
}
.title{
  border-bottom: solid black 1px; 
  padding: 20px;
  background: #1565C0;
}
.title .fa-home{
  font-size: 50px;
}
h2{
  padding-top: 15px;
  font-size: 25px;
  font-family: 'Delius Swash Caps', cursive;
  font-weight: 700;
  text-transform: uppercase;
}
.price{
  /*Comment the border code*/
/*   border: solid black 1px; */
  padding: 15px;
}
.price h4{
  font-family: 'Loved by the King', cursive;
  font-size: 40px;
/*   color: #009688; */
  font-weight: 400;
}
.price h4 span{
  font-weight: 500;
  font-size: 50px;
}
.option ul li{
  list-style: none;
  padding: 15px 10px;
  font-family: 'Lemonada', cursive;
  font-size: 14px;
}
.costDivide{
  border-top: 3px solid black;
  width: 80%;
  margin-left: 30px;
}
</style>
