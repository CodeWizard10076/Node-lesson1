const users = require('./users')
const books = require('./books')
users.print()
books.print()
let u1 = users.borrow(333)
let b1 = books.borrow(333)


if (u1.bookType != b1.type)
    console.log("User's type does not match the book's type")
else {
    if (b1.borrowed === "yes")
        console.log("The book has allready been borrowed")
    else {
        if (u1.borrowed === "yes")
            console.log("The user has allready borroed a book")
        else {
            u1.borrowed = "yes"
            b1.borrowed = "yes"
            console.log("The book has been borrowed successfully")
        }
    }
}
users.print()
books.print()