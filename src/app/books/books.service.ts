import { Injectable } from '@angular/core';

@Injectable()

export class BooksService {

  constructor() {}

  getBooks(){
    return [
      {
        name  : 'clean code',
        author: 'robert c. martin',
        image   : 'https://images-na.ssl-images-amazon.com/images/I/41jEbK-jG+L._SX258_BO1,204,203,200_.jpg',
        amount: 700,
      },
  
      {
        name  :'the pragmatic programmer',
        author:'andrew hunt, david thomas',
        image   :'https://m.media-amazon.com/images/I/71f743sOPoL._SL1500_.jpg',
        amount: 800,
      },
  
      {
        name  :'the theory of everything',
        author:'stephen hawking',
        image: 'https://m.media-amazon.com/images/I/61etgo8lzJL._SL1500_.jpg',
        amount: 18300,
      },
  
      {
        name: 'The future of the mind',
        author: 'michio kaku',
        image: 'https://m.media-amazon.com/images/I/61oOLmvUzTL._SL1200_.jpg',
        amount: 1500.35,
      }
    ];
  }
}
