import MainNavbar from "@/app/components/navbar";
import {Row} from "react-bootstrap";


export default function Header()  {
    return (
        <header>
            <div className="row">
                <div className="col-5 logo">
                    <a href="" className="navbar-brand">
                        <img src="https://dummyimage.com/50x50/000/fff" alt="Your band logo!"/>
                        Book your travel!
                    </a>
                </div>
                <div className="col-3">
                    <div className="row">
                        <div className="col-4">
                            <svg className="bi" fill="currentColor" height="100%">
                                <use
                                    xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#telephone-fill"></use>
                            </svg>
                        </div>
                        <div className="col-8">
                            <p>
                                24/7 Support number
                            </p>
                            <p>
                                1-555-555-555
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search entire site here"
                               aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-text" id="basic-addon2">
                        <i className="bi-search"></i>
                    </span>
                    </div>
                </div>
            </div>
            <Row>
                <MainNavbar></MainNavbar>
            </Row>
        </header>
    )
}