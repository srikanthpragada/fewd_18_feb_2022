// Superclass 
class Product {
    constructor(name, p) {
        this.name = name;
        this.price = p;
    }
    sellingPrice() {
        return this.price * 1.08; // 8% tax 
    }
}

// Subclass 
class DiscountedProduct extends Product  {
    constructor(name, price, discountRate) {
        super(name, price)    // call superclass's constructor 
        this.discountRate = discountRate;
    }
    // Override method in super class 
    sellingPrice() {
        let discount = this.price * this.discountRate / 100;
        let before_tax = this.price - discount;
        let after_tax = before_tax * 1.08; // 8% tax
        return after_tax;
    }
}

p = new Product("Dell XPS 9500", 2000000);
console.log(p.sellingPrice())

dp = new DiscountedProduct("Mac Pro", 2000000, 15);
console.log(dp.sellingPrice().toFixed(2))

console.log(JSON.stringify(p))  // Product object to JSON