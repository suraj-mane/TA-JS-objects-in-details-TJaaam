## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

class BookList {
  constructor(Title, Category, Author){
    this.Title = Title;
    this.Category = Category;
    this.Author = Author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
      this.isRead = true;
    }
  }
}

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

class Book  extends Booklist{
  constructor() {
    this.books = [];
    this.currentIndex = 0;
  }
  add(books = []){
    this.books = this.book.push(books);
    return this.books;
  }
  getCurrentBook(){
    return this.books[this.currentindex];
  }
  getNextBook(){
    this.currentindex = this.currentindex + 1;
    return this.book[this.currentindex];
  }
  getPrevBook(){
    this.currentindex = this.currentindex + 1;
    return this.book[this.currentindex];
  }
  changeCurrentBook(ele){
    this.currentindex = ele;
    return this.currentindex;
  }
}
#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
