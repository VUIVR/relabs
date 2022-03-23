export const defaultItems = [
  {
    id: 1,
    img: "./Images/Iph12.jpg",
    brand: "Apple",
    model: "Iphone 12",
    memory: 256,
    display: 6.1,
    price: 99990,
    discount: 14,
    totalPrice: function () { return Math.round(this.price * ((100 - this.discount) / 100)); },
    raiting: 5,
    creditProd: "РАССРОЧКА 0-0-6"
  },
  {
    id: 2,
    img: "./Images/Iph15.jpg",
    brand: "Apple",
    model: "Iphone 15",
    memory: 128,
    display: 6.1,
    price: 199990,
    discount: 5,
    totalPrice: function () { return Math.round(this.price * ((100 - this.discount) / 100)) },
    raiting: 3.2,
    creditProd: "КАК ИППОТЕКА"
  }
]
