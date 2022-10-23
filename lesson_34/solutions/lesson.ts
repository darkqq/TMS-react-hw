// Протипизировать данные
type User = {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
    age: number
    key: null
}

// @ts-ignore
const users: User[] = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
        "age": 23,
        "key": null
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
        "age": 20,
        "key": null,
    }
]

// currency описать с помощью литеральных типов и объединения
type Ingredient = "flour" | "beef" | "salad" | "cheese" | "sauce" | "cucumber" | "pepper"

type ProductType = 'burger'

type Product = {
    id: number
    name: string
    price: number
    currency: string
    ingredients: Ingredient[][]
    type: ProductType
    available?: boolean
}

// @ts-ignore
const products: Product[] = [
    {
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: "euro",
        ingredients: [["flour", "beef"], ["salad", "cheese", "sauce"]],
        type: "burger",
    },
    {
        id: 2,
        name: "Burger Lite",
        price: 2.3,
        currency: "euro",
        ingredients: [["flour", "beef"], ["cheese", "sauce", "cucumber"]],
        type: "burger",
        available: true,
    },
    {
        id: 3,
        name: "Burger Spicy",
        price: 5,
        currency: "dollar",
        ingredients: [["flour", "beef"], ["cheese", "sauce", "pepper"]],
        type: "burger",
        available: true
    },
]