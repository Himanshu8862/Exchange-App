import './PaymentOption.css'
import {
  Link
} from "react-router-dom";

function PaymentOption(props) {
  let src="/"+props.goto;
  return (
    <div className="child">
      <Link to={src}><p className="text-dark fs-5 text-decoration-none">{props.title}</p></Link>
    </div>
  );
}

export default PaymentOption;