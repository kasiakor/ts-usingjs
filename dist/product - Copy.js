"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
var SPORT;
(function (SPORT) {
    SPORT[SPORT["Running"] = 0] = "Running";
    SPORT[SPORT["Soccer"] = 1] = "Soccer";
    SPORT[SPORT["Watersports"] = 2] = "Watersports";
    SPORT[SPORT["Other"] = 3] = "Other";
})(SPORT = exports.SPORT || (exports.SPORT = {}));
class SportProducts extends Product {
    constructor(id, name, price, ...sportArray) {
        super(id, name, price);
        this.id = id;
        this.name = name;
        this.price = price;
        this._sports = sportArray;
    }
    usedForSports(s) {
        return this._sports.includes(s);
    }
    getSports() {
        return this._sports;
    }
}
exports.SportProducts = SportProducts;
