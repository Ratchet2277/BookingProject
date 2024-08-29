interface Hotel {
    id: int,
    name: string
    image: ImageMetadata,
    lowestPrice: float,
    currency: string
    city?: City
}