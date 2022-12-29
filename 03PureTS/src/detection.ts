interface User {
    names: string
    emails: string
}

interface Admin {
    names: string,
    emails: string
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account)
        return account.isAdmin
}