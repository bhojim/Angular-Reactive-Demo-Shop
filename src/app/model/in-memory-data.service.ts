import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../products/shared/product.model';
import { Rating } from './rating.model';
import { Review } from './review.model';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products: Product[] = [
      {
        id: 11,
        name: 'Shoes',
        price: 99,
        reduction: 70,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        imageURLs: ['img/shop/products/01.jpg', 'img/shop/products/02.jpg'],
        ratingIDs: [1],
        reviewIDs: [],
        sizes: [9, 10, 11] ,
        colors: ['mauve', 'taube', 'mint'],
        categoryIDs: [1, 2, 3]
      },
      {
        id: 12,
        name: 'Bag',
        price: 99,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        imageURLs: ['img/shop/products/02.jpg', 'img/shop/products/02.jpg', 'img/shop/products/02.jpg'],
        ratingIDs: [],
        reviewIDs: [],
        sizes: [] ,
        colors: ['mauve', 'taube', 'mint'],
        categoryIDs: [1, 2, 3]
      },
      {
        id: 13,
        name: 'Shades',
        price: 99,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        imageURLs: ['img/shop/products/03.jpg', 'img/shop/products/03.jpg', 'img/shop/products/03.jpg', 'img/shop/products/03.jpg'],
        ratingIDs: [],
        reviewIDs: [],
        sizes: [9, 10, 11] ,
        colors: ['mauve', 'taube', 'mint'],
        categoryIDs: [1, 2, 3]
      },
      {
        id: 14,
        name: 'Bracelet',
        price: 99,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        imageURLs: ['img/shop/products/04.jpg', 'img/shop/products/04.jpg'],
        ratingIDs: [],
        reviewIDs: [],
        sizes: [9, 10, 11] ,
        colors: ['mauve', 'taube', 'mint'],
        categoryIDs: [1, 2, 3]
      },
      {
        id: 15,
        name: 'Sweater',
        price: 99,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        imageURLs: ['img/shop/products/05.jpg', 'img/shop/products/05.jpg', 'img/shop/products/05.jpg'],
        ratingIDs: [],
        reviewIDs: [],
        sizes: [9, 10, 11] ,
        colors: ['mauve', 'taube', 'mint'],
        categoryIDs: [1, 2, 3]
      },
      {
        id: 16,
        name: 'Trainer',
        price: 99,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        imageURLs: ['img/shop/products/06.jpg'],
        ratingIDs: [],
        reviewIDs: [],
        sizes: [9, 10, 11] ,
        colors: ['mauve', 'taube', 'mint'],
        categoryIDs: [1, 2, 3]
      },
      {
        id: 17,
        name: 'Sweatpants',
        price: 99,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        imageURLs: ['img/shop/products/07.jpg', 'img/shop/products/07.jpg', 'img/shop/products/07.jpg'],
        ratingIDs: [],
        reviewIDs: [],
        sizes: [9, 10, 11] ,
        colors: ['mauve', 'taube', 'mint'],
        categoryIDs: [1, 2, 3]
      },
      {
        id: 18,
        name: 'Bluse',
        price: 99,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        imageURLs: ['img/shop/products/08.jpg', 'img/shop/products/08.jpg'],
        ratingIDs: [],
        reviewIDs: [],
        sizes: [9, 10, 11] ,
        colors: ['mauve', 'taube', 'mint'],
        categoryIDs: [1, 2, 3]
      },
      {
        id: 19,
        name: 'Ballerinas',
        price: 99,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        imageURLs: ['img/shop/products/09.jpg', 'img/shop/products/09.jpg', 'img/shop/products/09.jpg', 'img/shop/products/09.jpg'],
        ratingIDs: [],
        reviewIDs: [],
        sizes: [9, 10, 11] ,
        colors: ['mauve', 'taube', 'mint'],
        categoryIDs: [1, 2, 3]
      },
      {
        id: 20,
        name: 'Baseball Hat',
        price: 99,
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.',
        imageURLs: ['img/shop/products/10.jpg', 'img/shop/products/10.jpg'],
        ratingIDs: [],
        reviewIDs: [],
        sizes: [9, 10, 11] ,
        colors: ['mauve', 'taube', 'mint'],
        categoryIDs: [1, 2, 3]
      }
    ];

    const ratings: Rating[] = [
      {
        id: 1,
        customerID: '101',
        productID: 11,
        rating: 5
      }
    ];

    const reviews: Review[] = [
      {
        id: 1,
        customerID: '101',
        text: 'super product, love it',
        productID: 11,
        ratingID: 1
      }
    ];

    return { products, ratings, reviews };
  }
}
