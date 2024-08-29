import {City, PrismaClient} from '@prisma/client'


const prisma = new PrismaClient()

async function main() {
    await offers(4);
    await cities(16);
}

//create offers
async function offers(number: number) {
    let promises: Promise<any>[] = []
    for (const i in Array.from(new Array(number), (i) => i)) {
        const offerImage = await prisma.image.create({
            data: {
                src: "https://dummyimage.com/300x300/000/fff",
                alt: "DummyImage"
            }
        })
        const offer = prisma.offer.upsert({
            where: {id: Number(i)},
            update: {},
            create: {
                id: Number(i),
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem!",
                linkText: "Explore our deals",
                imageId: offerImage.id,
            }
        })
        promises.push(offer)
    }

    await Promise.all(promises)
}

//create Cities
async function cities(number: number) {
    for (const i in Array.from(new Array(number), (i) => i)) {
        const cityImage = await prisma.image.create({
            data: {
                src: "https://dummyimage.com/300x300/000/fff",
                alt: "DummyImage"
            }
        });
        const city = await prisma.city.upsert({
            where: {id: Number(i)},
            update: {},
            create: {
                id: Number(i),
                name: "Lorem City",
                imageId: cityImage.id,
                discount: Math.random() > .95 ? .2 : 0
            }
        })
        const nbHotels = Math.ceil(Math.random() * 10);
        await hotels(nbHotels, city);
        await flights(10, city);
    }

}

//create Hotels
async function hotels(number: number, city: City) {
    let promises: Promise<any>[] = []
    for (const i in Array.from(new Array(number), (i) => i)) {
        const hotelId = Number(i) + (100 * city.id)
        const hotelImage = await prisma.image.create({
            data: {
                src: "https://dummyimage.com/300x300/000/fff",
                alt: "DummyImage"
            }
        });
        const promise = prisma.hotel.upsert({
            where: {id: hotelId},
            update: {
                cityId: city.id
            },
            create: {
                id: hotelId,
                name: "Lorem Hotel",
                imageId: hotelImage.id,
                lowestPrice: Math.round(Math.random() * 10e7) / 100,
                currency: "$",
                cityId: city.id
            }
        })
        promises.push(promise)
    }
    await Promise.all(promises);
}

//create Flights
async function flights(number: number, arrival: City) {
    const departures = await prisma.city.findMany();
    const promises: Promise<any>[] = []

    for (const i in Array.from(new Array(number), (i) => i)) {
        const flightId = Number(i) + (100 * arrival.id)

        const promise = prisma.flight.upsert({
            where: {id: flightId},
            update: {
                arrivalCityId: arrival.id
            },
            create: {
                id: flightId,
                currency: "$",
                price: Math.round(Math.random() * 10e5) / 100,
                departureDate: new Date(),
                arrivalDate: new Date(),
                departureCityId: departures[Math.floor(Math.random() * departures.length)].id,
                arrivalCityId: arrival.id
            }
        })
        promises.push(promise)
    }
    await Promise.all(promises);
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })