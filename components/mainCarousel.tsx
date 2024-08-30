import {Carousel, CarouselItem, Image} from "react-bootstrap";
import {ReactNode} from "react";
import {Image as ImageMetaData} from "@prisma/client"

export default function MainCarousel({images}: { images: ImageMetaData[]; }): ReactNode {
    return (
        <Carousel>
            {images.map((image) => (
                <CarouselItem key={`image_carousel_${image.id}`}>
                    <Image className={"d-block w-100"} src={image.src} alt={image.alt}/>
                </CarouselItem>
            ))}
        </Carousel>
    )
}