import {Col} from "react-bootstrap";

export default function SearchForm({action}: { action: string }) {
    return (
        <form action={action} className="row">
            <What/>
            <When/>
            <Where/>
            <Who/>

            <div className="col-4 offset-4 text-center">
                <button type="submit" className="btn btn-primary me-auto">Proceed to results</button>
            </div>
        </form>
    )
}

export function What() {
    return (
        <Col md={3}>
            <h2><em>01</em> What?</h2>
            <div className="row">
                <div className="form-check col-6">
                    <input type="radio" name="what" id="what-hotel" className="form-check-input" value="hotel"/>
                    <label htmlFor="what-hotel" className="form-check-label">Hotel</label>
                </div>
                <div className="form-check col-6">
                    <input type="radio" name="what" id="what-catering" className="form-check-input" value="catering"/>
                    <label htmlFor="what-catering" className="form-check-label">Self Catering</label>
                </div>
                <div className="form-check col-6">
                    <input type="radio" name="what" id="what-flight" className="form-check-input" value="flight"/>
                    <label htmlFor="what-flight" className="form-check-label">Flight</label>
                </div>
                <div className="form-check col-6">
                    <input type="radio" name="what" id="what-cruise" className="form-check-input" value="cruise"/>
                    <label htmlFor="what-cruise" className="form-check-label">Cruise</label>
                </div>
                <div className="form-check col-6">
                    <input type="radio" name="what" id="what-combo" className="form-check-input" value="combo"/>
                    <label htmlFor="what-combo" className="form-check-label">Flight + Hotel</label>
                </div>
                <div className="form-check col-6">
                    <input type="radio" name="what" id="what-car" className="form-check-input" value="car"/>
                    <label htmlFor="what-car" className="form-check-label">Rent a car</label>
                </div>
            </div>
        </Col>
    )
}

export function When() {
    return (
        <Col md={3}>
            <h2><em>03</em> When?</h2>
            <div className="row">
                <div className="col-6">
                    <div className="mb-3">
                        <label htmlFor="check-in" className="form-label">Check-in date</label>
                        <input type="date" className="form-control" id="check-in"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="mb-3">
                        <label htmlFor="check-out" className="form-label">Check-in date</label>
                        <input type="date" className="form-control" id="check-out"/>
                    </div>

                </div>
            </div>
        </Col>
    );
}

export function Where() {
    return (
        <Col md={3}>
            <h2><em>02</em> Where?</h2>
            <div className="mb-3">
                <label htmlFor="where" className="form-label">Your destination</label>
                <input type="text" className="form-control" id="where"
                       placeholder="City, region, district or specific hotel"/>
            </div>
        </Col>
    )
}

export function Who() {
    return (
        <Col md={3}>
            <h2><em>04</em> Who?</h2>
            <div className="row">
                <div className="col-4">
                    <div className="mb-3">
                        <label htmlFor="room" className="form-label">Rooms</label>
                        <input type="number" className="form-control" id="room"/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="mb-3">
                        <label htmlFor="adults" className="form-label">Adults</label>
                        <input type="number" className="form-control" id="adults"/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="mb-3">
                        <label htmlFor="children" className="form-label">Children</label>
                        <input type="number" className="form-control" id="children"/>
                    </div>
                </div>
            </div>
        </Col>
    );
}
