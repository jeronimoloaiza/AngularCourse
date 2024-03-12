import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe  } from '@angular/common';
import { BookComponent } from './book/book.component';


@NgModule({
    declarations: [AppComponent, BooksComponent, BookComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent],
    providers:    [ CurrencyPipe ]
}
)
export class AppModule {}