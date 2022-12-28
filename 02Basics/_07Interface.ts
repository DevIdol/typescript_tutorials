interface User {
    readonly id: number;
    username: string;
    email: string;
    googleId?: string;
    // startTrail: () => string
    startTrail(): string;
    getCupon(cuponname: string, value: number): number
}

interface User{
    gethubToken: string
}

interface Admin extends User{
    role: 'admin' | 'editor' | 'user'
}

const info: Admin = {
    id: 123,
    role: 'admin',
    username: "Joe",
    email: "joe@gmail.com",
    gethubToken: "github",
    startTrail: () => "started",
    getCupon: (name: "joe", off: 10) => 10
};


export { }
