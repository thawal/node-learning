const PizzaShop=require("./pizza-shop")
const DrinkMachine=require("./drink-machine")

const drinkmach=new DrinkMachine();
const pizzashop=new PizzaShop()
pizzashop.on("order",(size,topping)=>{
    console.log(`order placed, ${size} pizza with ${topping}`)
    drinkmach.serveDrink(size);
})
pizzashop.order("large","cheese")
pizzashop.displayOrderNumber()
pizzashop.order("small","mushrooms")
pizzashop.displayOrderNumber()
