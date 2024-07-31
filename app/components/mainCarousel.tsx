import {Carousel, CarouselItem, Image} from "react-bootstrap";
import {ReactNode} from "react";

export default function MainCarousel({images}: { images: Image[]; }): ReactNode {
    return (
        <Carousel>
            {images.map((image) => (
                <CarouselItem>
                    <Image className={"d-block w-100"} src={image.src} alt={image.alt}/>
                </CarouselItem>
            ))}
        </Carousel>
    )
}