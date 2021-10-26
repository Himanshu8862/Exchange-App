import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  // get the state data
  const location = useLocation();
  let props = location.state.data;

  // items state
  let [items, setItems] = useState([]);

  function GetItems() {
    setItems(props);
  }

  useEffect(() => {
    GetItems();
  }, []);

  console.log("data is: ", items);
  console.log("state is; ", location.state);

  let mystyle = {
    "max-width": "50rem",
  };

  return (
    <div className="min-height my-5">
      <div class="card border-dark mx-auto my-5" style={mystyle}>
        <div class="card-header fs-2 text-success text-center">
          Payment Successful <i class="bi bi-check-circle"></i>
        </div>
        <div class="col p-3 mt-5">
         

          <div className="d-flex justify-content-between">
            <p className="text">Seller</p>
            <p className="text">{location.state.data[0].owner}</p>
          </div>
          <p className="text-secondary fw-bold">Products</p>
         
         

          
          {items.map(function (d) {
            return (
             
                <div className="d-flex justify-content-between">
                  <p className="text">{d.title}</p>
                  <p className="text">{d.price}</p>
                </div>
              
            );
          })}
          <div className="d-flex justify-content-between">
            <p className="text fw-bold">Amount</p>
            <p className="text fw-bold">{location.state.total}</p>
          </div>

        
          <div className="d-flex justify-content-between">
            <p className="text">Payment Type</p>
            <p className="text">{location.state.method}</p>
          </div>

          <div className="d-flex justify-content-between">
            <p className="text">Transaction ID</p>
            <p className="text">TX129283891934</p>
          </div>

         
        </div>
        <div class="col p-3 mt-5">
          <div className="d-flex justify-content-between">
            <Link
              className="fs-6 bg-primary text-white px-5 py-2 rounded-pill text-decoration-none"
              to="/profile"
            >
              Generate Invoice{" "}
              <i class="bi bi-file-earmark-arrow-down-fill"></i>
            </Link>
            <Link
              className="fs-6  text-white bg-success px-5 py-2 rounded-pill text-decoration-none"
              to="/"
            >
              Continue Shopping <i class="bi bi-bag"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
