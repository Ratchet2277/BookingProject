import {Button, Card, CardBody, CardImg, CardTitle, Col, Row} from "react-bootstrap";
import {BsBuilding} from "react-icons/bs";
import {FaPlaneDeparture} from "react-icons/fa";

export function Offer({offer}: { offer: Offer }) {
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

export function Destination({city}: { city: City }) {
    const nbHotel = city.hotels?.length || 0
    const currency = "$";
    let minHotelPrice = 0;

    if (city.hotels) {
        minHotelPrice = Math.min(...city.hotels.map(hotel => hotel.lowestPrice));
    }
    let minFlightPrice = 0;
    if (city.flights) {
        minFlightPrice = Math.min(...city.flights.map(flight => flight.price));
    }

    const isDiscount = Boolean(city.discount)
    return (
        <Card className={"col-3" + (isDiscount ? " discounted" : "")}>
            <CardImg src={city.image.src} variant="top" alt={city.image.alt || city.name}/>
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