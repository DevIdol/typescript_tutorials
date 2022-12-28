class User {
    email: string
    name: string
    city?: string
    constructor(email: string, name: string) {
        this.email = email
        this.name = email
    }
}

const info = new User("joe@gmail.com", "Joe")

info.city = "Myanmar"