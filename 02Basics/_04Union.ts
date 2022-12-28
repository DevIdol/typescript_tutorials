let score: number | string = 33

score = "String"

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let info: User | Admin = { name: "joe", id: 123 }

info = { username: "Admin", id: 321 }

function getDbId(id: number | string) {

    if (typeof id === 'string')
        console.log(id.toUpperCase())
    else
        console.log(id + 3)
}
getDbId(7)
getDbId("7")


//array

const data: (number | string)[] = [1, 2, 3, "4", "5"]

let seatAllotment: "joe" | "email" | "age"

seatAllotment = "joe"
// seatAllotment = "address"


export { }