const books = [
    {
        name: "The Warmth of Other Suns",
        author: "Isabel Wilkerson",
        genre: ["History", "Nonfiction", "Biography"],
        price: 21.00,
        edition: "Paperback",
        img: "./img/warmth.webp",
    },
     {
        name: "The Maze Runner",
        author: "James Dashner",
        genre: ["Fiction", "Fantasy", "Young Adult", "Dystopia"],
        price: 18.78,
        edition: "Paperback",
        img: "./img/maze.png",
    },
     {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: ["Fiction", "Romance", "Classics"],
        price: 18.67,
        edition: "Paperback",
        img: "./img/great.jpg",
    },
     {
        name: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        genre: ["Classics", "Fiction", "Fantasy", "Childrens"],
        price: 22.00,
        edition: "Hardcover",
        img: "./img/prince.jpg",
    },
     {
        name: "Exit Party",
        author: "Emily St. John Mandel",
        genre: ["Fiction", "Dystopia"],
        price: 19.68,
        edition: "Paperback",
        img: "./img/exit.jpg",
    },
     {
        name: "The Glass Castle",
        author: "Jeannette Walls",
        genre: ["Nonfiction", "Memoir", "Biography"],
        price: 17.28,
        edition: "Paperback",
        img: "./img/castle.png",
    },
     {
        name: "Angela's Ashes",
        author: "Frank McCourt",
        genre: ["Nonfiction", "Memoir", "Classics"],
        price: 17.99,
        edition: "Paperback",
        img: "./img/ashes.jpg",
    },
     {
        name: "A Stolent Life",
        author: "Jaycee Dugard",
        genre: ["Nonfiction", "Memoir", "Biography", "True Crime"],
        price: 15.99,
        edition: "Paperback",
        img: "./img/stolen.jpg",
    },
     {
        name: "The Diving Bell and the Butterfly",
        author: "Jean-Dominique Bauby",
        genre: ["Nonfiction", "Memoir", "Biography"],
        price: 27.45,
        edition: "Hardcover",
        img: "./img/butterfly.jpg",
    },
     {
        name: "Something of a Calling",
        author: "Zoje Stage",
        genre: ["Horror", "Mystery", "Fiction", "Adult"],
        price: 30.00,
        edition: "Hardcover",
        img: "./img/calling.jpg",
    },
     {
        name: "The Marlow Murder Club",
        author: "Robert Thorogood",
        genre: ["Mystery", "Fiction"],
        price: 77.91,
        edition: "Hardcover",
        img: "./img/marlow.jpg",
    },
     {
        name: "One of Us Is Lying",
        author: "Karen M. McManus",
        genre: ["Mystery", "Fiction", "Romance"],
        price: 18.32,
        edition: "Paperback",
        img: "./img/lying.jpg",
    },
     {
        name: "Make Way for Ducklings",
        author: "Robert McCloskey",
        genre: ["Childrens", "Fiction", "Classics"],
        price: 20.99,
        edition: "Hardcover",
        img: "./img/ducklings.jpg",
    },
     {
        name: "Piranesi",
        author: "Susanna Clarke",
        genre: ["Fantasy", "Fiction", "Mystery"],
        price: 26.99,
        edition: "Hardcover",
        img: "./img/Piranesi.jpg",
    },
     {
        name: "The Maid",
        author: "Nita Prose",
        genre: ["Mystery", "Fiction"],
        price: 15.87,
        edition: "Paperback",
        img: "./img/maid.jpg",
    },
    {
        name: "What Feeds Below",
        author:"Tatiana Schlote-Bonne",
        genre: ["Young Adult", "Fantasy","Horror", "Dystopia", "Mystery"],
        price: 16.73,
        edition: "Paperback",
        img: "./img/feeds.jpg",
    },
     {
        name: "Stolen Letters",
        author: "Elliot Pendriel",
        genre: ["Romance", "Fiction", "Fantasy", "Young Adult"],
        price: 34.99,
        edition: "Hardcover",
        img: "./img/",
    },
     {
        name: "Virtual Duet",
        author: "Elliot Pendriel",
        genre: ["Romance", "Fiction", "Young Adult"],
        price: 29.00,
        edition: "Hardcover",
        img: "./img/",
    },
     {
        name: "Chainsaws and Squirrels",
        author: "Elliot Pendriel",
        genre: ["Horror", "Mystery", "Fiction", "Young Adult", "Dystopia"],
        price: 30.49,
        edition: "Hardcover",
        img: "./img/",
    },
     {
        name: "Angelic Melodies",
        author: "Elliot Pendriel",
        genre: ["Fiction", "Fantasy", "Adult", "Romance", "Mystery"],
        price: 28.57,
        edition: "Hardcover",
        img: "./img/",
    },
];
const cart = [];
/* 
function filterGenre(gen){
let result = books.filter((nov) => nov.genre.includes(gen));
return result;
}
res = filterGenre("Fantasy")
console.log(res); */


function inject(books){
    books.forEach((books) =>{
    const container = document.querySelector(".box");
    container.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-item="${books.name}">
    <div class="item-name" id= ${books.name}>
    <h2>${books.name}</h2>
    </div>
    <div class="card-content">
    <img src= ${books.img} alt="book..."/>
    </div>
    <div class="price">
    <h4>$${books.price}</h4>
    </div>
    <button class="btn">Add To Cart</button>
    </div>`,);
});
}
inject(books);

//work in progress :[


let total = 0;
const buttons = document.querySelectorAll(".btn");
    buttons.forEach((buttons) =>
    buttons.addEventListener("click", function (event){
    let x = event.target.closest(".card").getAttribute("data-item");
    const result = books.find((book) => `${book.name}` === x);
    addToCart(result);
    cart.push(result);
    
    }
) );
    const scart = document.querySelector(".cart");
    function addToCart(item){
    scart.insertAdjacentHTML(
    "beforeend",
    `<div class="cartcard">
    <h5>${item.name}</h5>
    <h1>| ${item.price}</h1>
    <button class="remove">-</button>
    </div>`,);
    }
    
   
    


/* console.log(cart); */

// total price thing
/* for(let i = 0; i < cart.length; i++){
    cart[i,]
};

 */
/* console.log(event.target.closest(".card").getAttribute("item-data")); */