import {Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink} from "react-bootstrap";

export default function MainNavbar() {
    return (
        <Navbar expand="md">
            <NavbarBrand>
                <NavbarToggle aria-controls="mainNavbar"/>
            </NavbarBrand>
            <NavbarCollapse id="mainNavbar">
                <Nav>
                    <NavLink href={"/"}>Hotels</NavLink>
                    <NavLink href={"/"}>Flight </NavLink>
                    <NavLink href={"/"}>Flight + Hotel</NavLink>
                    <NavLink href={"/"}>Self Catering</NavLink>
                    <NavLink href={"/"}>Cruise</NavLink>
                    <NavLink href={"/"}>Car Rental</NavLink>
                    <NavLink href={"/"}>Location</NavLink>
                    <NavLink href={"/"}>Deal</NavLink>
                    <NavLink href={"/"}>Pages</NavLink>
                    <NavLink href={"/"}>Contact</NavLink>
                    <NavLink href={"/"}>Blog</NavLink>
                    <NavLink href={"/"}>Purchase</NavLink>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    );
}