import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button } from "reactstrap";
function OrderSummary({ toplamFiyat }) {
  let kargoFiyati = toplamFiyat < 200 ? 20 : 0;

  return (
    <div className=" ">
      <div>
        <MDBCard alignment="center" className="w-150">
          <p className=" italic">$200 ve üzeri ücretsiz kargo</p>
          <MDBCardBody>
            <MDBCardTitle>Sipariş Özeti</MDBCardTitle>
            <div className=" gap-10">
              <div className=" text-left ">
                <MDBCardText className="d-flex justify-content-between">
                  {" "}
                  <span>Ürün Toplam Fiyatı</span>
                  <span className="text-right">${toplamFiyat}</span>
                </MDBCardText>
                <MDBCardText className="d-flex justify-content-between">
                  {" "}
                  <span>Kargo Fiyatı</span>
                  <span className="text-right">${kargoFiyati}</span>
                </MDBCardText>
              </div>
            </div>
          </MDBCardBody>
          <MDBCardFooter className=" text-colors-lacivert d-flex justify-content-between">
            <span className=" text-colors-lacivert text-lg font-semibold">
              Toplam{" "}
            </span>

            <span className="text-right font-semibold text-lg ">
              ${toplamFiyat + kargoFiyati}
            </span>
          </MDBCardFooter>
          <div>
            <Button color="warning">Sepeti Onayla</Button>
          </div>
        </MDBCard>
      </div>
    </div>
  );
}
export default OrderSummary;
