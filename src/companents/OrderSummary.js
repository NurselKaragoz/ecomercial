import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "reactstrap";
function OrderSummary({ toplamFiyat }) {
  let kargoFiyati = 0;
  if (toplamFiyat < 200 && toplamFiyat > 0) kargoFiyati = 20;

  return (
    <div className="">
      <div>
        <MDBCard alignment="center" className="w-150">
          <MDBCardBody>
            <MDBCardTitle>Sipariş Özeti</MDBCardTitle>
            <div className=" gap-10">
              <div className=" text-left ">
                <MDBCardText className="d-flex justify-content-between">
                  <span>Ürünün Toplamı</span>
                  <span className="text-right">${toplamFiyat.toFixed(2)}</span>
                </MDBCardText>
                <MDBCardText className="d-flex justify-content-between">
                  <span>Kargo Fiyatı</span>

                  <span className="text-right">${kargoFiyati}</span>
                </MDBCardText>
                <p className=" italic text-left">
                  $200 ve üzeri ücretsiz kargo
                </p>
              </div>
            </div>
          </MDBCardBody>
          <MDBCardFooter className=" text-colors-lacivert d-flex justify-content-between">
            <span className=" text-colors-lacivert text-lg font-semibold">
              Toplam
            </span>

            <span className="text-right font-semibold text-lg ">
              ${toplamFiyat + kargoFiyati}
            </span>
          </MDBCardFooter>
          <div className=" p-2">
            <Link to="/user/address">
              <Button color="warning">Sepeti Onayla</Button>
            </Link>
          </div>
        </MDBCard>
      </div>
    </div>
  );
}
export default OrderSummary;
