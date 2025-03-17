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

const fs = require('fs')

const print = () => {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.log("The error is:", err);
            return;
        }
        const userS = JSON.parse(data).map(user => new User(user.id, user.name, user.bookType, user.borrowed));
        for (let i = 0; i < userS.length; i++) {
            console.log(userS[i].toString())
        }
    })
}

const borrow = async (id) => {
    const data = await fs.promises.readFile('users.json', 'utf8');
    const userS = JSON.parse(data);
    for (let i = 0; i < userS.length; i++) {
        if (userS[i].id === id)
            return (userS[i])
    }
    throw new Error("no user found")
}


async function initUser() {
    try {
        const jsonData = JSON.stringify(users, null, 2);
        await fs.promises.writeFile('users.json', jsonData, 'utf8');
    } catch (err) {
        console.log("The error is:", err);
    }
}

module.exports = { print, borrow, initUser }