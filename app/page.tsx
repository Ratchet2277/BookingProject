import './../public/css/style.scss';
import Header from "@/components/Header/header";
import MainCarousel from "@/components/mainCarousel";
import SearchForm from "@/components/Search/Search";
import {Destination, Offer} from "@/components/Card/Cards";
import {Row} from "react-bootstrap";

let imagesCarousel: ImageMetadata[] = [
    {src: "https://dummyimage.com/2000x1000/000/fff", alt: "DummyImage"},
    {src: "https://dummyimage.com/2000x1000/000/fff", alt: "DummyImage"},
    {src: "https://dummyimage.com/2000x1000/000/fff", alt: "DummyImage"}
]

//create offers data
let offers: Offer[] = []

for (const i in Array.from(new Array(4), (i) => i)) {
    let offer = {
        id: i,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem!",
        linkText: "Explore our deals",
        image: {
            src: "https://dummyimage.com/300x300/000/fff",
            alt: "DummyImage"
        }
    }
    offers.push(offer);
}


//create destinations dummy data
let destinations: City[] = []
for (const cityIndex in Array.from(new Array(16), (i) => i)) {
    let destination: City = {
        id: cityIndex,
        name: "Lorem City",
        image: {
            src: "https://dummyimage.com/300x300/000/fff",
            alt: "DummyImage"
        },
        hotels: [],
        flights: [],
        discount: Math.random() > .95 ? .2 : null

    }

    const nbHotels = Math.ceil(Math.random() * 10);

    for (const hotelIndex in Array.from(new Array(nbHotels), (i) => i)) {
        const hotel: Hotel = {
            id: hotelIndex,
            name: "Lorem Hotel",
            image: {
                src: "https://dummyimage.com/300x300/000/fff",
                alt: "DummyImage"
            },
            lowestPrice: Math.round(Math.random() * 10e7) / 100,
            currency: "$"
        }
        destination.hotels?.push(hotel);
    }

    for (const flightIndex in Array.from(new Array(5), (i) => i)) {
        const flight: Flight = {
            id: flightIndex,
            currency: "$",
            price: Math.round(Math.random() * 10e5) / 100,
            departure: {
                date: new Date(),
            },
            arrival: {
                date: new Date(),
                city: destination
            }
        }
        destination.flights?.push(flight)

    }
    destinations.push(destination);
}



export default function Page() {
    return (
        <main>
            <Header></Header>
            <Row as={"section"} className="bg-body-secondary search">
                <MainCarousel images={imagesCarousel}/>
                <SearchForm action={""}/>
            </Row>
            <Row as={"section"} className="bg-body-secondary offers">
                <h2>Explore our latest offers</h2>
                {offers.map(offer => (
                    <Offer offer={offer} key={`offer_${offer.id}`}/>
                ))}
            </Row>
            <Row as={"section"} className="bg-body-secondary destinations">
                <h2>Top destinations around the world</h2>
                {destinations.map(destination => (
                    <Destination city={destination} key={`destination_${destination.id}`}/>
                ))}
            </Row>
        </main>
    );
}
