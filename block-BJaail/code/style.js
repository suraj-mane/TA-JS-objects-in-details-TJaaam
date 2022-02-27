class BookList {
  constructor(root,list = []){
    this.books = list;
    this.root = root;
  }
  add(title, author, link){
    let book = new Book(title, author, link);
    this.books.push(book);
    this.createUI();
    return this.books.length;
  }
  createUI(){
    this.root.innerHTML ="";
    this.books.forEach(book => {
      this.root.append(book.createUI());
    })
  }
}

class Book {
  constructor(title, author, link){
    this.title = title;
    this.author = author;
    this.link = link;
    this.isDone = false;
    this.id = `id-${Date.now()}`;
  }
  handlecheck(){
    this.isDone = !this.isDone;
  }
  createUI(){
    let li = document.createElement("li");
    li.classList.add("demo");
    let input = document.createElement("input");
    input.classList.add("check");
    input.type = "checkbox";
    input.checked = this.isDone;
    input.addEventListener("click", this.handlecheck.bind(this));
    let p = document.createElement("p");
    p.classList.add("list");
    let p2 = document.createElement("p");
    p2.classList.add("list");
    let p3 = document.createElement("p");
    p3.classList.add("list");
    p.innerText = this.title;
    p2.innerText = this.author;
    p3.innerText = this.link;
    li.append(input,p,p2,p3);
    return li;
  }
} 

let input = document.querySelectorAll("input");
let display = new BookList(document.querySelector(".books"));

let btn = document.querySelector("button");

btn.addEventListener("click", (event) =>{
    display.add(event.target.value, event.target.value, event.target.value);
});