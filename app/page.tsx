import './../public/css/style.scss';
import Header from "@/app/components/header";

export default function Home() {
  return (
      <main className="container-fluid">
        <Header></Header>
        <section className="row bg-body-secondary search">
          <div id="mainCarousel" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://dummyimage.com/2000x1000/000/fff" alt="Carousel image 1"
                     className="d-block w-100"/>
              </div>
              <div className="carousel-item">
                <img src="https://dummyimage.com/2000x1000/000/fff" alt="Carousel image 2"
                     className="d-block w-100"/>
              </div>
              <div className="carousel-item">
                <img src="https://dummyimage.com/2000x1000/000/fff" alt="Carousel image 3"
                     className="d-block w-100"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <form action="" className="row">
            <div className="col-3">
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
            </div>
            <div className="col-3">
              <h2><em>02</em> Where?</h2>
              <div className="mb-3">
                <label htmlFor="where" className="form-label">Your destination</label>
                <input type="text" className="form-control" id="where"
                       placeholder="City, region, district or specific hotel"/>
              </div>
            </div>
            <div className="col-3">
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
            </div>
            <div className="col-3">
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
            </div>
            <div className="col-4 offset-4 text-center">
              <button type="submit" className="btn btn-primary me-auto">Proceed to results</button>
            </div>
          </form>
        </section>
        <section id="latest" className="row bg-body-secondary">
          <h2>Explore our latest offers</h2>
          <div className="card col-3">
            <img src="https://dummyimage.com/300x300/000/fff" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem!</p>
              <a href="" className="btn btn-primary">Explore our deals</a>
            </div>
          </div>
          <div className="card col-3">
            <img src="https://dummyimage.com/300x300/000/fff" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem!</p>
              <a href="" className="btn btn-primary">Explore our deals</a>
            </div>
          </div>
          <div className="card col-3">
            <img src="https://dummyimage.com/300x300/000/fff" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem!</p>
              <a href="" className="btn btn-primary">Explore our deals</a>
            </div>
          </div>
          <div className="card col-3">
            <img src="https://dummyimage.com/300x300/000/fff" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, rem!</p>
              <a href="" className="btn btn-primary">Explore our deals</a>
            </div>
          </div>
        </section>
      </main>
  );
}
