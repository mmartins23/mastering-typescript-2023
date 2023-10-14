// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages: number[] = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
    name: string,
    price: number,
}

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

function getTotal(products: Product[]): number {
    const total = products.reduce((accumulator, product) => accumulator + product.price, 0);
    return total;
  }

// Example usage:
const products: Product[] = [
    { name: 'coffee mug', price: 11.50 },
    { name: 'printer', price: 29.99 },
    { name: 'keyboard', price: 19.95 },
  ];
  
  const totalPrice = getTotal(products);
  console.log(`Total Price: $${totalPrice.toFixed(2)}`);