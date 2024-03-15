import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../types/Book'; //Import the Book interface
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book; //This is a property that will be passed from the parent component  
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}


  addToCart() {
    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book); //this.book is for passing all the information of every book when the button is clicked
  }

}