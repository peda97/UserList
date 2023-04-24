export interface User{
    id: number
    firstName: string
    lastName: string
    email: string
}

export interface UserData{
    users: User[]
}