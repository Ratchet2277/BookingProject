import './../public/css/style.scss';
import MainCarousel from "@/components/mainCarousel";
import SearchForm from "@/components/Search/Search";
import {Destination, Offer} from "@/components/Card/Cards";
import {Row} from "react-bootstrap";
import {Image, PrismaClient} from "@prisma/client";

let imagesCarousel: Image[] = [
    {id: 1, src: "https://dummyimage.com/2000x1000/000/fff", alt: "DummyImage"},
    {id: 2, src: "https://dummyimage.com/2000x1000/000/fff", alt: "DummyImage"},
    {id: 3, src: "https://dummyimage.com/2000x1000/000/fff", alt: "DummyImage"}
]

const prisma = new PrismaClient()

export default async function Page() {
    const offers = await prisma.offer.findMany({select: {id: true}, take: 4})
    const destinations = await prisma.city.findMany({select: {id: true}, take: 12})

    return (
        <main>
            <Row as={"section"} className="bg-body-secondary search">
                <MainCarousel images={imagesCarousel}/>
                <SearchForm action={""}/>
            </Row>
            <Row as={"section"} className="bg-body-secondary offers">
                <h2>Explore our latest offers</h2>
                {offers.map(offer => (
                    <Offer offerId={offer.id} key={`offer_${offer.id}`}/>
                ))}
            </Row>
            <Row as={"section"} className="bg-body-secondary destinations">
                <h2>Top destinations around the world</h2>
                {destinations.map(destination => (
                    <Destination cityId={destination.id} key={`destination_${destination.id}`}/>
                ))}
            </Row>
        </main>
    );
}
