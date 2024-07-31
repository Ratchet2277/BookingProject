import {Carousel, CarouselItem, Image} from "react-bootstrap";
import {ReactNode} from "react";

let key = 0

export default function MainCarousel({images}: { images: ImageMetadata[]; }): ReactNode {
    return (
        <Carousel>
            {images.map((image) => (
                <CarouselItem key={`image_carousel_${key++}`}>
                    <Image className={"d-block w-100"} src={image.src} alt={image.alt}/>
                </CarouselItem>
            ))}
        </Carousel>
    )
}