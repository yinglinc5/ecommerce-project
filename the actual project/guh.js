const books = [
    {
        name: "The Warmth of Other Suns",
        author: "Isabel Wilkerson",
        genre: ["History"],
        price: 21.00,
        edition: "Paperback",
    },
     {
        name: "The Maze Runner",
        author: "James Dashner",
        genre: ["Fiction", "Fantasy", "Young Adult", "Dystopia"],
        price: 18.78,
        edition: "Paperback",
    },
     {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: ["Fiction", "Romance", "Classics"],
        price: 18.67,
        edition: "Paperback",
    },
     {
        name: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        genre: ["Classics", "Fiction", "Fantasy", "Childrens"],
        price: 22.00,
        edition: "Hardcover",
    },
     {
        name: "Exit Party",
        author: "Emily St. John Mandel",
        genre: ["Fiction", "Dystopia"],
        price: 19.68,
        edition: "Paperback",
    },
     {
        name: "The Glass Castle",
        author: "Jeannette Walls",
        genre: ["Nonfiction", "Memoir", "Biography"],
        price: 17.28,
        edition: "Paperback",
    },
     {
        name: "Angela's Ashes",
        author: "Frank McCourt",
        genre: ["Nonfiction", "Memoir", "Classics"],
        price: 17.99,
        edition: "Paperback",
    },
     {
        name: "A Stolent Life",
        author: "Jaycee Dugard",
        genre: ["Nonfiction", "Memoir", "Biography", "True Crime"],
        price: 15.99,
        edition: "Paperback",
    },
     {
        name: "The Diving Bell and the Butterfly: A Memoir of Life in Death",
        author: "Jean-Dominique Bauby",
        genre: ["Nonfiction", "Memoir", "Biography"],
        price: 27.45,
        edition: "Hardcover",
    },
     {
        name: "Something of a Calling",
        author: "Zoje Stage",
        genre: ["Horror", "Mystery", "Fiction", "Adult"],
        price: 30.00,
        edition: "Hardcover",
    },
     {
        name: "The Marlow Murder Club",
        author: "Robert Thorogood",
        genre: ["Mystery", "Fiction"],
        price: 77.90,
        edition: "Hardcover",
    },
     {
        name: "One of Us Is Lying",
        author: "Karen M. McManus",
        genre: ["Mystery", "Fiction", "Romance"],
        price: 18.32,
        edition: "Paperback",
    },
     {
        name: "Stolen Letters",
        author: "Elliot Pendriel",
        genre: ["Romance", "Fiction", "Fantasy", "Young Adult"],
        price: 34.99,
        edition: "Hardcover",
    },
     {
        name: "Virtual Duet",
        author: "Elliot Pendriel",
        genre: ["Romance", "Fiction", "Young Adult"],
        price: 29.00,
        edition: "Hardcover",
    },
     {
        name: "Chainsaws and Squirrels",
        author: "Elliot Pendriel",
        genre: ["Horror", "Mystery", "Fiction", "Young Adult", "Dystopia"],
        price: 30.49,
        edition: "Hardcover",
    },
     {
        name: "Angelic Melodies",
        author: "Elliot Pendriel",
        genre: ["Fiction", "Fantasy", "Adult", "Romance", "Mystery"],
        price: 28.57,
        edition: "Hardcover",
    },
];

function filterGenre(gen){
let result = books.filter((nov) => nov.genre.includes(gen));
return result;
}
res = filterGenre("Fantasy")
console.log(res);

cart = []
function addToCart(item){
cart.push(item)
total += item.price;
}
