import pkg from 'faker';
import { Product } from '../types/product'
 
const { commerce, lorem, datatype } = pkg;
let products: Product[] = [];

for (let i = 1; i <= 5; i++) {
  products.push({
    id: i,
    name: commerce.productName(),
    description: lorem.sentences(),
    price: commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: datatype.number()
  });
}

console.log(JSON.stringify(products));