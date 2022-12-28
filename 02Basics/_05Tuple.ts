// const user: (string | number)[] = [1, 'Joe']
let user: [string, number, boolean]

user = ["Joe", 123, true]

let rgb: [number, number, number] = [255, 123, 122]

type User = [number, string]

const newUser: User = [123, "Joe"]

newUser[1] = "Admin"


export{}