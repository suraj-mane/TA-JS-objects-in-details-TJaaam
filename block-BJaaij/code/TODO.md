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
  constructor(Title, Category, Author, isRead, finishedDate){
    this.Title = Title;
    this.Category = Category;
    this.Author = Author;
    this.isRead = isRead;
    this.finishedDate = finishedDate;
  }
  markBookAsRead() {
    if(isRead === true){
      return 
    }
  }
}

#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

class Book  extends Booklist{
  constructor(Title, Category, Author, isRead, finishedDate,array, cindex) {
    super(Title, Category, Author, isRead, finishedDate);
    this.array = array;
    this.cindex = cindex;
  }
  add(){
    return `Book will added to the list`;
  }
  getCurrentBook(){
    return `${array[this.cindex]}`;
  }
  getNextBook(){
    return `${array[this.cindex]+1}`;
  }
  getPrevBook(){
    return `${array[this.cindex]+1}`;
  }
  changeCurrentBook(ele){
    this.cindex = ele;
    return this.cindex
  }
}
#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.

After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
