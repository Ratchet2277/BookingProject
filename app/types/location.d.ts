interface City {
    id: int,
    name: string
    image: ImageMetadata,
    hotels?: Hotel[],
    flights?: Flight[],
    discount?: float
}