const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//destructuring

/*

const book = getBook(3);
// const title = book.title;
// const author = book.author;

const {title,author,pages,publicationDate,genres,hasMovieAdaptation} = book
// console.log(title,author,genres)
// const primaryGenre = genres[0];
// const SecGenre = genres[1];

//rest operator (not spread)
// const[primaryGenre,SecGenre ,...otherGenres] = genres;
// console.log(primaryGenre,SecGenre , otherGenres)

//spread operator
// const newGenres = [...genres,"new genre"]
// newGenres;

const updatedBook = {...book,
  //new prop
  moviePublicationDate:"2022-01-01" ,
  //overwriting prop
  pages:1210};
updatedBook;

//templete literals
const summary = `${title} by ${author} has ${pages+2} pages and was published on ${publicationDate.split("-")[0]}`;
summary;

//ternery operator

// const pagesRange = pages > 1000 ? "Long book" : "short book";
// pagesRange


//normal way
// function getYear(str){
//   return str.split("-")[0];
// }
//arrow functions
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(publicationDate))

//short circuiting logical operator
//all value except false,0,null,undefined are treated as true

// console.log(true && 'Some string');
// console.log(false && 'Some string');
// console.log(hasMovieAdaptation && "This book has a movie");
// console.log('Jonas' && 'Some string')
// console.log(0 && "some string")
// console.log(true || "some string")
// console.log(false || "some string")
// console.log(book.translations.spanish);
// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
// spanishTranslation

//both thing but "no data" showing and in second 0 showing
//using OR ||

// console.log(book.reviews.librarything.reviewsCount)
// const countWrong = book.reviews.librarything.reviewsCount || "NO DATA"
// countWrong
//new operator ?? (Nullish Coalescing Operator)

// const count = book.reviews.librarything.reviewsCount ?? "no data"
// count

//optional chaining (?.) and also used ?? Nullish Coalescing Operator

function getTotalReviewCount(book){
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book))

*/

/*

//ARRAY MAP METHOD -> return new array
const books = getBooks();
const x = [1,2,3,4,5].map((el) => el*2);
console.log(x);

const titles = books.map((book)=>book.title)
titles

//with return
// const essentialData = books.map((book) => {
//   return{
//     title: book.title,
//     author: book.author,
//   }
// })

//without return
const essentialData = books.map((book) => ({
    title: book.title,
    author: book.author,
}));
essentialData

//Filter method
const longBooks = books.filter(book=>book.pages>600).filter(book=>book.hasMovieAdaptation)
longBooks

//filter+map
const adventureBooks = books.filter(book=>book.genres.includes("adventure")).map(book=>book.title)
adventureBooks

//reduce method
const pagesAllBooks = books.reduce((sum,book) =>sum+book.pages ,0)
pagesAllBooks

//array sort method
const arr = [3,7,1,9,6];
//a-b asc...b-a desc
const sortedx = arr.sort((a,b)=>a-b);
sortedx
const sortedByPages = books.slice().sort((a,b)=>a.pages-b.pages)
sortedByPages

//immutable array workings
// 1)add a book obj to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const newBooks = [...books,newBook];
newBooks;

// 2) delete a book obj from array
const booksAfterDelete =  newBooks.filter(book=>book.id !=4)
booksAfterDelete

// 3) update a book obj in array
const updatedBooks = booksAfterDelete.map(book=>book.id === 2 ? {...book,title: "The Cyberiad: Fables for the Cybernetic Age"} : book)
updatedBooks

*/

/*
//Asyncronous JS PROMISES
//normal way
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res)=>res.json())
.then((data)=>console.log(data))

console.log("jonas")



//async await 
async function getTodos() {
const res = await fetch("https://jsonplaceholder.typicode.com/todos")
const data = await res.json();
console.log(data);

return data;

}

const todos = getTodos();
console.log(todos)
console.log("jonas")

*/

