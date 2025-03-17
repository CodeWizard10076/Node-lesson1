class Book {
    id
    name
    type
    borrowed

    constructor(id, name, type, borrowed) {
        this.id = id
        this.name = name;
        this.type = type;
        this.borrowed = borrowed;
    }

    toString() {
        return `id: ${this.id},name: ${this.name}, type: ${this.type}, borrowed: ${this.borrowed}`;
    }
}

books = [
    new Book(111, "book1", "drama", "yes"),
    new Book(222, "book2", "action", "no"),
    new Book(333, "book3", "horror", "no")
]


const fs = require('fs')

const print = () => {
    fs.readFile('books.json', 'utf8', (err, data) => {
        if (err) {
            console.log("The error is:", err);
            return;
        }
        const bookS = JSON.parse(data).map(book => new Book(book.id, book.name, book.type, book.borrowed));
        for (let i = 0; i < bookS.length; i++) {
            console.log(bookS[i].toString())
        }
    })
}

const borrow = async (id) => {
    const data = await fs.promises.readFile('books.json', 'utf8');
    const bookS = JSON.parse(data);
    for (let i = 0; i < bookS.length; i++) {
        if (bookS[i].id === id)
            return (bookS[i])
    }
    throw new Error("no book found")
}


async function initbook() {
    try {
        const jsonData = JSON.stringify(books, null, 2);
        await fs.promises.writeFile('books.json', jsonData, 'utf8');
    } catch (err) {
        console.log("The error is:", err);
    }
}

module.exports = { print, borrow, initbook }