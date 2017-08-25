// 9 inch = $14.99;
// 13 inch = $18.99;
// 17 inch = $22.99;

// cost = size + toppings ($2/each)
//
// function Topping (type){
//   this.types = [];
//   this.price = 2;
// }

//Business Logic
function Pizza (round, sauce, toppings){
  this.round = round;
  this.sauce = sauce;
  this.toppings = [];
  this.cost = 0;
}

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


//User Interface Logic
$(document).ready(function(){
var pizza = new Pizza (0,0,[]);

  $("#orderForm").submit(function(event){
    debugger;
    event.preventDefault();
    $("#orderForm").hide();
    $(".panel").show();
    // $("input:checkbox[name=pizza-round]:checked").each(function(){
    //   var pizzaRound = $(this).val();
    //
    //   $("").append(pizzaRound + "<br>");
    // });
    // $("input:checkbox[name=pizza-sauce]:checked").each(function(){
    //   var   = $(this).val();
    //   $("").append(  + "<br>");
    // });
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var pizzaTopping = $(this).val();
      pizza.toppings.push(pizzaTopping);
      $("").append(pizzaTopping + "<br>");
    });

// var price = newOrder.calculation(sizeInput, sauceInput, newTopping.price);
//     newOrder.price = cost;
  });


});
