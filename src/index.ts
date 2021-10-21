import { SportProducts, SPORT } from "./product";
import { Cart } from "./cart";
import { sizeFormatter, costFormatter } from "./formatters";

let kayak = new SportProducts(1, "Kayak", 2, SPORT.Watersports);
let hat = new SportProducts(2, "Hat", 5, SPORT.Running, SPORT.Watersports);
let ball = new SportProducts(3, "Soccer Ball", 6, SPORT.Soccer);

let cart =  new Cart("Gia");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
cart.addProduct(ball, 1);

//console.log(`The total of the cart is ${cart.totalPrice}`);
//console.log(`The item count in the cart is ${cart.itemCount}`);
sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", cart.totalPrice);
