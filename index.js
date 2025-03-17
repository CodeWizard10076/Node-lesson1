const users = require('./users')
const books = require('./books')
users.print()
books.print()
//users.initUser()
//books.initbook()
const args = process.argv.slice(2)

let u1 = users.borrow(parseInt(args[0]))
let b1 = books.borrow(parseInt(args[1]))


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