// class User {
//     private email: string
//     public name: string
//     city?: string
//     constructor(email: string, name: string) {
//         this.email = email
//         this.name = email
//     }
// }

class User {

    private _age = 80

    city?: string;
    constructor(private email: string, public name: string) {
        this.email = email;
        this.name = email;
        this.city
    }

    private deleteToken() {
        console.log("Token Deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get calAge(): number {
        return this._age
    }

    set calAge(age) {
        if (age > 120) {
            throw new Error("Age can't be more than 120")
        }
        this._age = age
    }
}

const info = new User("joe@gmail.com", "Joe");
info.city = "Myanmar";
