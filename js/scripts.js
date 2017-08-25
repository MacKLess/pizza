//Business Logic
function Pizza (round, sauce, toppings){
  this.round = round;
  this.sauce = sauce;
  this.toppings = [];
}

Pizza.prototype.getCost = function(){
  var cost = 0.0;
  for (i = 0; i < this.toppings.length; i++){
    cost += 2.0;
  }
  if (this.round === 9){
    cost += 14.00;
  }else if (this.round === 13){
    cost += 18.00;
  }else if(this.round === 17){
    cost += 22.00;
  }else{
    alert ('error');
  }
  return cost;
}
Pizza.prototype.translation = function(){
  if (this.round === 9){
    return "9 Inch Pizza Round"
  }else if (this.round === 13){
    return "13 Inch Pizza Round"
  }else{
    return "17 Inch Pizza Round"
  }
}

//User Interface Logic
$(document).ready(function(){
var pizza = new Pizza (0,0,[]);
// debugger;

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

    var price = pizza.getCost();
    var pizzaSize = pizza.translation();
    var toppingsList = 'none';
      if (pizza.toppings.length > 0){
        toppingsList = pizza.toppings.join('</li><li>');
      }

    $("#orderConfirmation").append(`<li>Pizza Size ==> ${pizzaSize}</li>`);
    $("#orderConfirmation").append(`<li>Pizza Sauce ==> ${sauceInput}</li>`);
    $("#orderConfirmation").append(`<li>Pizza Toppings:<ul>
      <li>${toppingsList}</li>
      </ul>`);
    $("#orderConfirmation").append(`<li id="seePrice">Total Cost ==> $${price}</li>`);
  });
});
