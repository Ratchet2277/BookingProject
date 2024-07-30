import {Navbar, NavbarBrand, NavbarCollapse} from "react-bootstrap";

export default function MainNavbar() {
    return (
        <Navbar expand="md">
            <NavbarBrand>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </NavbarBrand>
            <NavbarCollapse>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a href="" className="nav-link">Hotels </a></li>
                    <li className="nav-item"><a href="" className="nav-link">Flight </a></li>
                    <li className="nav-item"><a href="" className="nav-link">Flight + Hotel</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Self Catering</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Cruise</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Car Rental</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Location</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Deal</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Pages</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Contact</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Blog</a></li>
                    <li className="nav-item"><a href="" className="nav-link">Purchase</a></li>
                </ul>
            </NavbarCollapse>
        </Navbar>
    );
}