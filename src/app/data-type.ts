export interface SignUp{
    name: string,
    password: string,
    email: string
}

export interface Login {
    email: string,
    password: string
}

export interface productType {
    id: string,
    name: string,
    price: number,
    category: string,
    color: string,
    description: string,
    image: string
}