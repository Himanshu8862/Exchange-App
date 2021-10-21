import PaymentOption from './PaymentOption'
import './Payment.css'
import {
  Link
} from 'react-router-dom'

function Payment() {
  return (
    <div className="Payment">
      <p className="Payment-title">Payment</p>
      <p>choose the payment option</p>
      <div className="d-flex justify-content-between m-5">
        <PaymentOption title="Debit Card" goto="debitcard" />
        <PaymentOption title="Credit Card" goto="creditcard" />
        <PaymentOption title="Internet Banking" goto="internetbanking" />
        <PaymentOption title="UPI" goto="upi" />
      </div>
      <div className="navigation-links">
        <Link className="fs-6 bg-primary text-dark px-5 py-2 rounded-pill text-decoration-none" to="/cart">Back to cart</Link>
        <Link className="fs-6  text-white bg-success px-5 py-2 rounded-pill text-decoration-none" to="/paymentstatus">Proceed</Link>
      </div>
    </div>
  );
}

export default Payment;
