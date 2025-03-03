const books = [{
    name: "To The Lighthouse",
    author: "virginia woolf"
},
{
    name: "Sinekli Bakkal",
    author: "Halide Edip Adıvar"
}];

const newBook = {
    name: "Olasılıksız",
    author: "Adam Forever"
};

const listBooks = () => {
    if(books.length === 0){
        console.log("No books available.");
        return;
    }

    books.forEach((book, index) => {
        console.log(`${index + 1}. ${book.name} written by ${book.author}`);
    }
    );
};

const addBook = (newBook) => {
    return new Promise((resolve, reject) => {
        if(!newBook || !newBook.name || !newBook.author){
            return reject("Invalid book data. Please provide both name and author.");
        }
        books.push(newBook);
        resolve(books);
    });
}

async function showBooks(){
    try {
        console.log("Current books:");
        listBooks();

        console.log("\nAdding new book...\n");
        await addBook(newBook);

        console.log("Updated book list:");
        listBooks();

    } catch (err) {
        console.log("Error:", err);
    }
}

showBooks();