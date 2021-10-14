import { Link } from 'react-router-dom'

function InternetBanking() {


    return (
        <div className="conainer px-5 my-5 min-height">
            <h4 className="text-left lg">Payment</h4>
            <h2 className="text-center fw-bold">Choose the Bank</h2>
            <div className="d-flex justify-content-center">
                <select class="form-select my-5 mb-5 w-50 text-center " aria-label="Default select example">
                    <option selected className="fw-bold">--Select--</option>
                    <option value="1">Axis Bank</option>
                    <option value="2">State Bank of India</option>
                    <option value="3">Canara Bank</option>
                    <option value="4">Dena Bank</option>
                    <option value="5">Dena Bank</option>


                </select>
            </div>
            <div class="d-flex justify-content-between mt-5">
                <Link className="fs-6 bg-primary text-dark px-5 py-2 rounded-pill text-decoration-none" to="/cart">Back to cart</Link>
                <Link className="fs-6  text-white bg-success px-5 py-2 rounded-pill text-decoration-none" to="/paymentsuccess">Proceed</Link>
            </div>

        </div>
    );
}

export default InternetBanking