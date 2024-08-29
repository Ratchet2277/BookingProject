import {Button, Card, CardBody, CardImg, CardTitle, Col, Row} from "react-bootstrap";
import {BsBuilding} from "react-icons/bs";
import {FaPlaneDeparture} from "react-icons/fa";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export async function Offer({offerId}: { offerId: number }) {
    const offer = await prisma.offer.findFirst({where: {id: offerId}, include: {image: true}});
    if (!offer) {
        return;
    }
    return (
        <Card className="col-3">
            <CardImg src={offer.image.src} variant="top" alt={offer.image.alt || offer.description}/>
            <CardBody>
                <CardTitle>{offer.description}</CardTitle>
                <Button variant="primary" href="">{offer.linkText}</Button>
            </CardBody>
        </Card>
    )
}

export async function Destination({cityId}: { cityId: number }) {
    const city = await prisma.city.findFirst({
        where: {id: cityId},
        include: {image: true, hotels: true, arrivalFlight: true}
    });
    if (!city) {
        console.log(`City with id ${cityId} not found`);
        return;
    }
    const nbHotel = city.hotels?.length || 0
    const currency = "$";
    let minHotelPrice = 0;

    if (city.hotels) {
        minHotelPrice = Math.min(...city.hotels.map(hotel => hotel.lowestPrice));
    }
    let minFlightPrice = 0;
    if (city.arrivalFlight) {
        minFlightPrice = Math.min(...city.arrivalFlight.map(flight => flight.price));
    }

    const isDiscount = Boolean(city.discount)
    return (
        <Card className={"col-3" + (isDiscount ? " discounted" : "")}>
            <CardImg src={city.image?.src} variant="top" alt={city.image?.alt || city.name}/>
            <CardBody>
                <CardTitle>{city.name}</CardTitle>
                <CardBody>
                    {nbHotel} Hotel{nbHotel > 1 ? 's' : ''}
                </CardBody>
                <Button variant="primary" href="">View All</Button>
                <Row className="card-ribon">
                    <Col sm={6}>
                        <BsBuilding className="col-4"/>
                        <Col sm={4}>
                            from
                            <em>{currency} {minHotelPrice}</em>
                        </Col>
                    </Col>
                    <Col sm={6}>
                        <FaPlaneDeparture className="col-4"/>
                        <Col sm={4}>
                            from
                            <em>{currency} {minFlightPrice}</em>
                        </Col>
                    </Col>
                </Row>
                {isDiscount && (
                    <div>{Math.round(city.discount * 100)}%</div>
                )}
            </CardBody>
        </Card>
    )
}