interface Flight {
    id: string
    departure: {
        date?: Date
        city?: City
    }
    arrival: {
        date?: Date
        city?: City
    }
    price: float
    currency: string
}