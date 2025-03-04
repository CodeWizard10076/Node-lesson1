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


const print = () => {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].toString())
    }
}

const borrow = (id) => {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id)
            return (books[i])
    }
    throw new Error("no book found")
}

module.exports = { print, borrow }