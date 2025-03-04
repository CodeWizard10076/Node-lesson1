class User {
    id
    name
    bookType
    borrowed

    constructor(id, name, bookType, borrowed) {
        this.id = id
        this.name = name;
        this.bookType = bookType;
        this.borrowed = borrowed;
    }

    toString() {
        return `id: ${this.id},name: ${this.name}, bookType: ${this.bookType}, borrowed: ${this.borrowed}`;
    }
}

users = [
    new User(111, "user1", "drama", "yes"),
    new User(222, "user2", "action", "yes"),
    new User(333, "user3", "horror", "no")
]

const print = () => {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].toString())
    }
}

const borrow = (id) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id)
            return (users[i])
    }
    throw new Error("no user found")
}

module.exports = { print, borrow }