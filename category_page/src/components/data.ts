import { Product } from './types';

interface ProductsData {
  [key: string]: Product[];
}

const productData: ProductsData = {
  snack: [
    {
      id: '1',
      name: 'Chips',
      price: 1.99,
      deliveryTime: 3,
      deliveryCharges: true,
      rating: 4.2,
      imageUrl: 'https://example.com/chips.jpg',
      subcategory: 'snack'
    },
    {
      id: '2',
      name: 'Cookies',
      price: 3.99,
      deliveryTime: 4,
      deliveryCharges: true,
      rating: 4.3,
      imageUrl: 'https://example.com/cookies.jpg',
      subcategory: 'snack'
    },
    {
      id: '3',
      name: 'Donuts',
      price: 2.99,
      deliveryTime: 4,
      deliveryCharges: true,
      rating: 4.5,
      imageUrl: 'https://example.com/donuts.jpg',
      subcategory: 'snack'
    },
    {
      id: '4',
      name: 'Ice Cream',
      price: 3.99,
      deliveryTime: 2,
      deliveryCharges: true,
      rating: 4.8,
      imageUrl: 'https://example.com/icecream.jpg',
      subcategory: 'snack'
    },
    {
      id: '5',
      name: 'Popcorn',
      price: 1.99,
      deliveryTime: 2,
      deliveryCharges: false,
      rating: 4.1,
      imageUrl: 'https://example.com/popcorn.jpg',
      subcategory: 'snack'
    },
    {
      id: '6',
      name: 'Pretzels',
      price: 2.49,
      deliveryTime: 2,
      deliveryCharges: false,
      rating: 4.0,
      imageUrl: 'https://example.com/pretzels.jpg',
      subcategory: 'snack'
    }
  ],
  cake: [
    {
      id: '7',
      name: 'Chocolate Cake',
      price: 24.99,
      deliveryTime: 5,
      deliveryCharges: false,
      rating: 4.5,
      imageUrl: 'https://example.com/cake.jpg',
      subcategory: 'cake'
    },
    {
      id: '8',
      name: 'Cupcakes',
      price: 4.99,
      deliveryTime: 4,
      deliveryCharges: true,
      rating: 4.6,
      imageUrl: 'https://example.com/cupcakes.jpg',
      subcategory: 'cake'
    },
    {
      id: '9',
      name: 'Cheesecake',
      price: 6.99,
      deliveryTime: 5,
      deliveryCharges: false,
      rating: 4.8,
      imageUrl: 'https://example.com/cheesecake.jpg',
      subcategory: 'cake'
    },
    {
      id: '10',
      name: 'Tiramisu',
      price: 7.99,
      deliveryTime: 4,
      deliveryCharges: true,
      rating: 4.9,
      imageUrl: 'https://example.com/tiramisu.jpg',
      subcategory: 'cake'
    }
  ],
  'fast food': [
    {
      id: '11',
      name: 'Hamburger',
      price: 6.99,
      deliveryTime: 2,
      deliveryCharges: true,
      rating: 3.8,
      imageUrl: 'https://example.com/burger.jpg',
      subcategory: 'fast food'
    },
    {
      id: '12',
      name: 'Pizza',
      price: 12.99,
      deliveryTime: 3,
      deliveryCharges: true,
      rating: 4.7,
      imageUrl: 'https://example.com/pizza.jpg',
      subcategory: 'fast food'
    },
    {
      id: '13',
      name: 'Salad',
      price: 7.99,
      deliveryTime: 2,
      deliveryCharges: false,
      rating: 4.2,
      imageUrl: 'https://example.com/salad.jpg',
      subcategory: 'fast food'
    },
    {
      id: '14',
      name: 'Pancakes',
      price: 5.99,
      deliveryTime: 3,
      deliveryCharges: true,
      rating: 4.1,
      imageUrl: 'https://example.com/pancakes.jpg',
      subcategory: 'fast food'
    },
    {
      id: '15',
      name: 'Tacos',
      price: 8.99,
      deliveryTime: 3,
      deliveryCharges: true,
      rating: 4.3,
      imageUrl: 'https://example.com/tacos.jpg',
      subcategory: 'fast food'
    },
    {
      id: '16',
      name: 'Nachos',
      price: 5.99,
      deliveryTime: 3,
      deliveryCharges: true,
      rating: 4.2,
      imageUrl: 'https://example.com/nachos.jpg',
      subcategory: 'fast food'
    },
    {
      id: '17',
      name: 'Sandwich',
      price: 5.49,
      deliveryTime: 2,
      deliveryCharges: false,
      rating: 4.3,
      imageUrl: 'https://example.com/sandwich.jpg',
      subcategory: 'fast food'
    }
  ],
  drink: [
    {
      id: '18',
      name: 'Soda',
      price: 1.49,
      deliveryTime: 1,
      deliveryCharges: false,
      rating: 4.1,
      imageUrl: 'https://example.com/soda.jpg',
      subcategory: 'drink'
    },
    {
      id: '19',
      name: 'Coffee',
      price: 2.49,
      deliveryTime: 1,
      deliveryCharges: false,
      rating: 4.3,
      imageUrl: 'https://example.com/coffee.jpg',
      subcategory: 'drink'
    },
    {
      id: '20',
      name: 'Fruit Juice',
      price: 2.99,
      deliveryTime: 1,
      deliveryCharges: false,
      rating: 4.4,
      imageUrl: 'https://example.com/fruitjuice.jpg',
      subcategory: 'drink'
    },
    {
      id: '21',
      name: 'Milkshake',
      price: 4.49,
      deliveryTime: 2,
      deliveryCharges: true,
      rating: 4.7,
      imageUrl: 'https://example.com/milkshake.jpg',
      subcategory: 'drink'
    },
    {
      id: '22',
      name: 'Smoothie',
      price: 4.99,
      deliveryTime: 1,
      deliveryCharges: true,
      rating: 4.6,
      imageUrl: 'https://example.com/smoothie.jpg',
      subcategory: 'drink'
    }
  ]
};

export default productData;

// import { Product } from './types';

// const productData: Product[] = [
//   {
//     id: '1',
//     name: 'Chips',
//     price: 1.99,
//     deliveryTime: 3,
//     deliveryCharges: true,
//     rating: 4.2,
//     imageUrl: 'https://example.com/chips.jpg',
//     subcategory: 'snack'
//   },
//   {
//     id: '2',
//     name: 'Chocolate Cake',
//     price: 24.99,
//     deliveryTime: 5,
//     deliveryCharges: false,
//     rating: 4.5,
//     imageUrl: 'https://example.com/cake.jpg',
//     subcategory: 'cake'
//   },
//   {
//     id: '3',
//     name: 'Hamburger',
//     price: 6.99,
//     deliveryTime: 2,
//     deliveryCharges: true,
//     rating: 3.8,
//     imageUrl: 'https://example.com/burger.jpg',
//     subcategory: 'fast food'
//   },
//   {
//     id: '4',
//     name: 'Soda',
//     price: 1.49,
//     deliveryTime: 1,
//     deliveryCharges: false,
//     rating: 4.1,
//     imageUrl: 'https://example.com/soda.jpg',
//     subcategory: 'drink'
//   },
//   {
//     id: '5',
//     name: 'Cookies',
//     price: 3.99,
//     deliveryTime: 4,
//     deliveryCharges: true,
//     rating: 4.3,
//     imageUrl: 'https://example.com/cookies.jpg',
//     subcategory: 'snack'
//   },
//   {
//     id: '6',
//     name: 'Pizza',
//     price: 12.99,
//     deliveryTime: 3,
//     deliveryCharges: true,
//     rating: 4.7,
//     imageUrl: 'https://example.com/pizza.jpg',
//     subcategory: 'fast food'
//   },
//   {
//     id: '7',
//     name: 'Salad',
//     price: 7.99,
//     deliveryTime: 2,
//     deliveryCharges: false,
//     rating: 4.2,
//     imageUrl: 'https://example.com/salad.jpg',
//     subcategory: 'fast food'
//   },
//   {
//     id: '8',
//     name: 'Donuts',
//     price: 2.99,
//     deliveryTime: 4,
//     deliveryCharges: true,
//     rating: 4.5,
//     imageUrl: 'https://example.com/donuts.jpg',
//     subcategory: 'snack'
//   },
//   {
//     id: '9',
//     name: 'Coffee',
//     price: 2.49,
//     deliveryTime: 1,
//     deliveryCharges: false,
//     rating: 4.3,
//     imageUrl: 'https://example.com/coffee.jpg',
//     subcategory: 'drink'
//   },
//   {
//     id: '10',
//     name: 'Ice Cream',
//     price: 3.99,
//     deliveryTime: 2,
//     deliveryCharges: true,
//     rating: 4.8,
//     imageUrl: 'https://example.com/icecream.jpg',
//     subcategory: 'snack'
//   },
//   {
//     id: '11',
//     name: 'Pancakes',
//     price: 5.99,
//     deliveryTime: 3,
//     deliveryCharges: true,
//     rating: 4.1,
//     imageUrl: 'https://example.com/pancakes.jpg',
//     subcategory: 'fast food'
//   },
//   {
//     id: '12',
//     name: 'Fruit Juice',
//     price: 2.99,
//     deliveryTime: 1,
//     deliveryCharges: false,
//     rating: 4.4,
//     imageUrl: 'https://example.com/fruitjuice.jpg',
//     subcategory: 'drink'
//   },
//   {
//     id: '13',
//     name: 'Cupcakes',
//     price: 4.99,
//     deliveryTime: 4,
//     deliveryCharges: true,
//     rating: 4.6,
//     imageUrl: 'https://example.com/cupcakes.jpg',
//     subcategory: 'cake'
//   },
//   {
//     id: '14',
//     name: 'Tacos',
//     price: 8.99,
//     deliveryTime: 3,
//     deliveryCharges: true,
//     rating: 4.3,
//     imageUrl: 'https://example.com/tacos.jpg',
//     subcategory: 'fast food'
//   },
//   {
//     id: '15',
//     name: 'Popcorn',
//     price: 1.99,
//     deliveryTime: 2,
//     deliveryCharges: false,
//     rating: 4.1,
//     imageUrl: 'https://example.com/popcorn.jpg',
//     subcategory: 'snack'
//   },
//   {
//     id: '16',
//     name: 'Milkshake',
//     price: 4.49,
//     deliveryTime: 2,
//     deliveryCharges: true,
//     rating: 4.7,
//     imageUrl: 'https://example.com/milkshake.jpg',
//     subcategory: 'drink'
//   },
//   {
//     id: '17',
//     name: 'Cheesecake',
//     price: 6.99,
//     deliveryTime: 5,
//     deliveryCharges: false,
//     rating: 4.8,
//     imageUrl: 'https://example.com/cheesecake.jpg',
//     subcategory: 'cake'
//   },
//   {
//     id: '18',
//     name: 'Nachos',
//     price: 5.99,
//     deliveryTime: 3,
//     deliveryCharges: true,
//     rating: 4.2,
//     imageUrl: 'https://example.com/nachos.jpg',
//     subcategory: 'fast food'
//   },
//   {
//     id: '19',
//     name: 'Pretzels',
//     price: 2.49,
//     deliveryTime: 2,
//     deliveryCharges: false,
//     rating: 4.0,
//     imageUrl: 'https://example.com/pretzels.jpg',
//     subcategory: 'snack'
//   },
//   {
//     id: '20',
//     name: 'Smoothie',
//     price: 4.99,
//     deliveryTime: 1,
//     deliveryCharges: true,
//     rating: 4.6,
//     imageUrl: 'https://example.com/smoothie.jpg',
//     subcategory: 'drink'
//   },
//   {
//     id: '21',
//     name: 'Tiramisu',
//     price: 7.99,
//     deliveryTime: 4,
//     deliveryCharges: true,
//     rating: 4.9,
//     imageUrl: 'https://example.com/tiramisu.jpg',
//     subcategory: 'cake'
//   },
//   {
//     id: '22',
//     name: 'Sandwich',
//     price: 5.49,
//     deliveryTime: 2,
//     deliveryCharges: false,
//     rating: 4.3,
//     imageUrl: 'https://example.com/sandwich.jpg',
//     subcategory: 'fast food'
//   }]

//   export default productData;