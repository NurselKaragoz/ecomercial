import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export function CarouselDefault() {
  const { products } = useSelector((s) => s.product.product);
  console.log("carousel", products);
  let state = useLocation();

  console.log("state curosel", state.pathname);

  const productId = state.pathname.split("/")[2];
  console.log("ProductId:", productId);

  return (
    <div className=" w-1/3">
      <div class="carousel-item active">
        <img
          src={products[productId - 2].images[0].url}
          class="d-block w-100"
          alt="Wild Landscape"
          width="100"
          height="100"
        />
        {/* <div class="carousel-item">
          <img
            src={products[1].images[0].url}
            class="d-block w-100"
            alt="Camera"
          />
        </div> */}
        {/* <div class="carousel-item">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
            class="d-block w-100"
            alt="Exotic Fruits"
          />
        </div> */}
      </div>
      {/* <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleControls"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button> */}
    </div>
  );
}
export default CarouselDefault;
