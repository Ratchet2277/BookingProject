import './../public/css/style.scss';
import Header from "@/app/components/Header/header";
import MainCarousel from "@/app/components/mainCarousel";
import SearchForm from "@/app/components/Search/Search";

let imagesCarousel: Image[] = [
  {src: "https://dummyimage.com/2000x1000/000/fff", alt: "DummyImage"},
  {src: "https://dummyimage.com/2000x1000/000/fff", alt: "DummyImage"},
  {src: "https://dummyimage.com/2000x1000/000/fff", alt: "DummyImage"}
]

export default function Home() {
  return (
      <main>
        <Header></Header>
        <section className="row bg-body-secondary search">
          <MainCarousel images={imagesCarousel}/>
          <SearchForm action={""}/>
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
