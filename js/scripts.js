// 9 inch = $14.99;
// 13 inch = $18.99;
// 17 inch = $22.99;

// cost = size + toppings ($2/each)

//Business Logic
function Pizza (round, sauce, toppings){
  this.round = round;
  this.sauce = sauce;
  this.toppings = [];
  this.cost = 0;
}
//
// function Topping (type){
//   this.types = [];
//   this.price = 2;
// }

Pizza.prototype.calculation = function(round, toppings){
  var cost = 0;
  for (i = 0; toppings.length; i++){
    cost += 2;
  }
  if (round === 9){
    cost += 14.99;
  }else if (round === 13){
    cost += 18.99;
  }else if(round === 17){
    cost += 22.99;
  }else{
    alert ('error');
  }
  return cost;
}


Pizza.prototype.calculation = function(round, toppings){
  var price = 0;

}





//User Interface Logic
$(document).ready(function(){
var Pizza = new Pizza (0,0,[]);


  $("#orderForm").submit(function(event){
    event.preventDefault();
    $("#orderForm").hide();
    $(".panel").show();

var price = ()


    var cost = newOrder.calculation(sizeInput, sauceInput, newTopping.price);
    newOrder.price = cost;
  });


});
