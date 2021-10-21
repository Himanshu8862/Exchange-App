import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from './Components/Payment';
import DebitCards from './Components/DebitCard';
import CreditCard from './Components/CreditCard';
import InternetBanking from './Components/InternetBanking';
import Upi from './Components/Upi';
import PaymentSuccess from './Components/PaymentSuccess';
import Cart from './Components/Cart';
import { BrowserRouter,Route} from "react-router-dom";
import Discussion from './Components/Discussion';
import NewPost from './Components/NewPost';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/payment" component={Payment} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/debitcard" component={DebitCards} />
      <Route exact path="/creditcard" component={CreditCard} />
      <Route exact path="/internetbanking" component={InternetBanking} />
      <Route exact path="/upi" component={Upi} />
      <Route exact path="/paymentsuccess" component={PaymentSuccess} />
      <Route exact path="/discussion" component={Discussion}/>
      <Route exact path="/newpost" component={NewPost}/>
    </BrowserRouter>
  );
}

export default App;