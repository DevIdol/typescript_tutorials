function addTwo(num: number): number {
    return num * 2
    // return "Joe"
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isAdmin: boolean) {
    console.log(name, email, isAdmin)
}

let loginUser = (email: string, isAdmin: boolean) => {
    console.log(email, isAdmin)
}

addTwo(2)
getUpper("Hello Joe")
signUpUser("Joe", "joe@gmail.com", true)
loginUser("joe@gmail.com", true)


// function getValue(myVal: number) {
//     if (myVal > 5)
//         return true
//     return "200 OK"

// }

const getHello = (s: string): string => {
    return "Hello Joe"
}

const heros = ["thor", 'spiderman', "ironman"]
heros.map((hero): string => {
    return `Hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}



export { }