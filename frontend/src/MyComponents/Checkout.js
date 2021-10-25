import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Checkout() {
  // get the state data
  const location = useLocation();
  let props = location.state;

  // items state 
  let [items, setItems] = useState([]);

  function GetItems() {
    setItems(props);
  }

  useEffect(() => {
    GetItems();
  }, []);


  function calucateTotal() {
    let total = 0;
    items.map((item) => {
      total += Number(item.price);
    });
    return total;
  }

  console.log("checkout: ", props);
  return (
    <div className="d-sm-flex flex-column m-5 justify-content-center">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Summery</span>
        <span className="badge bg-primary rounded-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        {items.map(function (d) {
          return (
            <>
              <hr />
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">{d.title}</h6>
                  <small className="text-muted">{d.desc}</small>
                </div>
                <span className="text-muted">{d.price}</span>
              </li>
            </>
          );
        })}
        <li className="list-group-item d-flex justify-content-between">
            <span>Total (Rs)</span>
            <strong>{calucateTotal()}</strong>
          </li>
      </ul>

      <form className="card p-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Promo code"
          />
          <button type="submit" className="btn btn-secondary">
            Redeem
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-between my-5">
        <Link
          className="fs-6 bg-primary text-white px-3  py-2 rounded-pill text-decoration-none"
          to="/cart"
        >
          <i class="bi bi-arrow-left"></i>
          Back to cart
        </Link>
        <Link
          className="fs-6  text-white bg-success px-5 py-2 rounded-pill text-decoration-none"
          to={
            {
                pathname: "/payment",
                state: {
                  data: items,
                  total:calucateTotal(),
                }
            }}
        >
          Proceed
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
