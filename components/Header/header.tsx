import MainNavbar from "@/components/Header/navbar";
import {Col, FormControl, Image, InputGroup, NavbarBrand, Row} from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";
import {BsSearch, BsTelephoneFill} from "react-icons/bs";

export default function Header() {
    return (
        <header>
            <Row>
                <Col md={5} className={"Logo"}>
                    <NavbarBrand href={""}>
                        <Image
                            src={"https://dummyimage.com/50x50/000/fff"}
                            alt={"logo"}/>
                        Book your travel!
                    </NavbarBrand>
                </Col>
                <Col md={3}>
                    <Row>
                        <Col md={4}>
                            <BsTelephoneFill/>
                        </Col>
                        <Col md={8}>
                            <p>
                                24/7 Support number
                            </p>
                            <p>
                                1-555-555-555
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <InputGroup className="mb-3">
                        <InputGroupText id="Search">
                            <BsSearch color="white"/>
                        </InputGroupText>
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </InputGroup>

                </Col>
            </Row>
            <Row>
                <MainNavbar></MainNavbar>
            </Row>
        </header>
    )
}