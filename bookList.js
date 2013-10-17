
var BookList = function(books) {
    this.booksRead = booksRead;
    this.notRead = notRead;
    this.nextBook = nextBook;
    this.currentBook = currentBook;
    this.lastBook = lastBook;
    this.bookShelf = [this.booksRead, this.notRead, this.nextBook, this.currentBook, this.lastBook];

    this.addBook = function (book) {
        this.bookShelf.push(book);
    };

};

var Book = function (bookTitle, genre, author) {
    this.bookTitle = bookTitle;
    this.genre = genre;
    this.author = author;
    this.read = true;
    this.readDate = Date();

};


var book1 = new Book("Harry Potter", "fantasy", "J.R.Rowling");
var bookList1 = new BookList("Gone with the Wind", "Twilight", "Steve Jobs", "48 Laws of Power");


bookList1.addBook(book1);

console.log(BookList.bookShelf);