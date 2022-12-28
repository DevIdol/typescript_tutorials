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

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User): User {
//     return { name: "", email: "", isActive: true }
// }

// createUser({ name: "Joe", email: "joe@gmail.com", isActive: true })


//Read Only & Optins(?.)
//======================

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1234",
    name: "Joe",
    email: "joe@gmail.com",
    isActive: true,
}


type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}


type cardDetails = cardNumber & cardDate & {
    cvv: number
}

// myUser._id = "4321"
myUser.email = "admin@gmail.com"




export { }