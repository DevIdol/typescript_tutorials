let grettings: string = "Hello TypeScript";
grettings.toUpperCase()
console.log(grettings)

//number
let userId: number = 100_000.0
userId.toFixed()

//boolean
let isLoggedIn: boolean = false

//any
let hero;
function getHero(args: any) {
    return args
}

hero = getHero("Joe")
hero = getHero(20)

export{}