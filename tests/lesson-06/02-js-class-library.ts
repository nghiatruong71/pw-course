
type books = {
    title: string;
    author : string;
    year: number;
};
class Library{
    name: string;
    location: string;
    books : books[];
constructor(name:string, location: string){
    this.name = name;
    this.location = location;
    this.books= []
}
addBook(books:books): void{
    this.books.push(books);

}
}
const library = new Library("Central Library", "Da Nang");
library.addBook({
  title: "Clean Code",
  author: "Robert Martin",
  year: 2008
});
console.log(library);