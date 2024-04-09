import { Product } from './types';

export interface ProductsData {
  [key: string]: Product[];
}

export const productData: ProductsData = {
  'NIGERIAN DISHES': [
    {
      id: '1',
      name: 'Jollof Rice',
      price: 1.99,
      deliveryTime: 20,
      deliveryCharges: true,
      rating: 4.2,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/jollof rice.png',
      subcategory: 'nigerian dish'
    },
    {
      id: '2',
      name: 'Fried Rice',
      price: 3.99,
      deliveryTime: 15,
      deliveryCharges: true,
      rating: 4.3,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/fried rice.png',
      subcategory: 'nigerian dish'
    },
    {
      id: '3',
      name: 'Amala and Ewedu',
      price: 2.99,
      deliveryTime: 8,
      deliveryCharges: true,
      rating: 4.5,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/amala & ewedu.png',
      subcategory: 'nigerian dish'
    },
    {
      id: '4',
      name: 'Akara',
      price: 3.99,
      deliveryTime: 5,
      deliveryCharges: true,
      rating: 4.8,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/akara.png',
      subcategory: 'nigerian dish'
    },
    {
      id: '5',
      name: 'Beef',
      price: 1.99,
      deliveryTime: 2,
      deliveryCharges: false,
      rating: 4.1,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/beef.png',
      subcategory: 'nigerian dish'
    },
    {
      id: '6',
      name: 'Pepper Soup',
      price: 2.49,
      deliveryTime: 2,
      deliveryCharges: false,
      rating: 4.0,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/pepper soup.png',
      subcategory: 'nigerian dish'
    }
  ],
  SNACKS: [
    {
      id: '7',
      name: 'Suya',
      price: 1.99,
      deliveryTime: 3,
      deliveryCharges: true,
      rating: 4.2,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/suya.png',
      subcategory: 'snack'
    },
    {
      id: '8',
      name: 'Cookies',
      price: 3.99,
      deliveryTime: 4,
      deliveryCharges: true,
      rating: 4.3,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/cookies.png',
      subcategory: 'snack'
    },
    {
      id: '9',
      name: 'Donuts',
      price: 2.99,
      deliveryTime: 4,
      deliveryCharges: true,
      rating: 4.5,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/donuts.png',
      subcategory: 'snack'
    },
    {
      id: '10',
      name: 'Ice Cream',
      price: 3.99,
      deliveryTime: 2,
      deliveryCharges: true,
      rating: 4.8,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/icecream.png',
      subcategory: 'snack'
    },
    {
      id: '11',
      name: 'Popcorn',
      price: 1.99,
      deliveryTime: 2,
      deliveryCharges: false,
      rating: 4.1,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/popcorn.png',
      subcategory: 'snack'
    },
    {
      id: '12',
      name: 'Chinchin',
      price: 2.49,
      deliveryTime: 2,
      deliveryCharges: false,
      rating: 4.0,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/chinchin.png',
      subcategory: 'snack'
    }
  ],
  CAKES: [
    {
      id: '13',
      name: 'Chocolate Cake',
      price: 24.99,
      deliveryTime: 5,
      deliveryCharges: false,
      rating: 4.5,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/chocolatecake.png',
      subcategory: 'cake'
    },
    {
      id: '14',
      name: 'Cupcakes',
      price: 4.99,
      deliveryTime: 4,
      deliveryCharges: true,
      rating: 4.6,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/cupcake.png',
      subcategory: 'cake'
    },
    {
      id: '15',
      name: 'Red Velvet',
      price: 6.99,
      deliveryTime: 5,
      deliveryCharges: false,
      rating: 4.8,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/red-velvet.png',
      subcategory: 'cake'
    },
    {
      id: '16',
      name: 'Birthday Cake',
      price: 7.99,
      deliveryTime: 4,
      deliveryCharges: true,
      rating: 4.9,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/birthday-cake.png',
      subcategory: 'cake'
    }
  ],
  'FAST FOOD': [
    {
      id: '17',
      name: 'Sharwarma',
      price: 6.99,
      deliveryTime: 2,
      deliveryCharges: true,
      rating: 3.8,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/sharwarma.png',
      subcategory: 'fast food'
    },
    {
      id: '18',
      name: 'Pizza',
      price: 12.99,
      deliveryTime: 3,
      deliveryCharges: true,
      rating: 4.7,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/pizza.png',
      subcategory: 'fast food'
    },
    {
      id: '19',
      name: 'Puffpuff',
      price: 7.99,
      deliveryTime: 2,
      deliveryCharges: false,
      rating: 4.2,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/puff-puff.png',
      subcategory: 'fast food'
    },
    {
      id: '20',
      name: 'Pancakes',
      price: 5.99,
      deliveryTime: 3,
      deliveryCharges: true,
      rating: 4.1,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/pancake.png',
      subcategory: 'fast food'
    },
    {
      id: '21',
      name: 'Salad',
      price: 8.99,
      deliveryTime: 3,
      deliveryCharges: true,
      rating: 4.3,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/salad.png',
      subcategory: 'fast food'
    },
    {
      id: '22',
      name: 'Spring Roll',
      price: 5.99,
      deliveryTime: 3,
      deliveryCharges: true,
      rating: 4.2,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/springroll.png',
      subcategory: 'fast food'
    },
    {
      id: '23',
      name: 'Sandwich',
      price: 5.49,
      deliveryTime: 2,
      deliveryCharges: false,
      rating: 4.3,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/sandwich.png',
      subcategory: 'fast food'
    }
  ],
  DRINKS: [
    {
      id: '24',
      name: 'Zobo',
      price: 1.49,
      deliveryTime: 1,
      deliveryCharges: false,
      rating: 4.1,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/zobo.png',
      subcategory: 'drink'
    },
    {
      id: '25',
      name: 'Parfait',
      price: 2.49,
      deliveryTime: 1,
      deliveryCharges: false,
      rating: 4.3,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/parfait.png',
      subcategory: 'drink'
    },
    {
      id: '26',
      name: 'Tigernut Drink',
      price: 2.99,
      deliveryTime: 1,
      deliveryCharges: false,
      rating: 4.4,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/tigernut.png',
      subcategory: 'drink'
    },
    {
      id: '27',
      name: 'Pineapple Juice',
      price: 4.49,
      deliveryTime: 2,
      deliveryCharges: true,
      rating: 4.7,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/pineapple.png',
      subcategory: 'drink'
    },
    {
      id: '28',
      name: 'Smoothie',
      price: 4.99,
      deliveryTime: 1,
      deliveryCharges: true,
      rating: 4.6,
      location: 'Awo Hall, UI',
      imageUrl: '/assets/smoothie.png',
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