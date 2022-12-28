// const User = {
//     name: "Joe",
//     email: "joe@gmail.com",
//     isActive: true,
// }

// function createUser({ name: string, isAdmin: boolean }) { }

// let newUser = { name: "Joe", isAdmin: true, email: "joe@gmail.com" }

// createUser(newUser)

// function createCourse(): { name: string, price: number } {
//     return { name: "typescript", price: 250_100 }
// }


//Type Aliases
//=============


type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): User {
    return { name: "", email: "", isActive: true }
}

createUser({ name: "Joe", email: "joe@gmail.com", isActive: true })



export { }