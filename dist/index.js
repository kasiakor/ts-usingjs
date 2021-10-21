"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const cart_1 = require("./cart");
const formatters_1 = require("./formatters");
let kayak = new product_1.SportProducts(1, "Kayak", 2, product_1.SPORT.Watersports);
let hat = new product_1.SportProducts(2, "Hat", 5, product_1.SPORT.Running, product_1.SPORT.Watersports);
let ball = new product_1.SportProducts(3, "Soccer Ball", 6, product_1.SPORT.Soccer);
let cart = new cart_1.Cart("Gia");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
cart.addProduct(ball, 1);
//console.log(`The total of the cart is ${cart.totalPrice}`);
//console.log(`The item count in the cart is ${cart.itemCount}`);
formatters_1.sizeFormatter("Cart", cart.itemCount);
formatters_1.costFormatter("Cart", cart.totalPrice);
