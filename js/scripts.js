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
Pizza.prototype.translation = function(round){
  if (round === 9){
    return "9 Inch Pizza Round"
  }else if (round === 13){
    return "13 Inch Pizza Round"
  }else{
    return "17 Inch Pizza Round"
  }
}

//User Interface Logic
$(document).ready(function(){
var pizza = new Pizza (0,0,[]);
debugger;

  $("#orderForm").submit(function(event){
    event.preventDefault();
    $("#orderForm").hide();
    $(".panel").show();


    var roundInput = parseInt($("#pizzaRound").val());
      pizza.round = roundInput;

    var sauceInput = $("#pizzaSauce").val();
      pizza.sauce = sauceInput;

    var pizzaTopping;
    $("input:checkbox[name=pizza-topping]:checked").each(function(){
      var pizzaTopping = $(this).val();
      pizza.toppings.push(pizzaTopping);
    });
    var pizzaSize = pizza.translation(roundInput);
    $("#orderConfirmation").append(`<li>${pizzaSize}</li>`);
    $("#orderConfirmation").append(`<li>${sauceInput}</li>`);
    $("#orderConfirmation").append(`<li>Pizza Toppings:<ul>
      <li>${pizza.toppings.join('</li><li>')}</li>
      </ul>`);

// var price = newOrder.calculation(sizeInput, sauceInput, newTopping.price);
//     newOrder.price = cost;
  });


});
