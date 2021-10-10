import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import MainPage from './MyComponents/MainPage';
import Login from './MyComponents/Login';
import Register from './MyComponents/Register';
import ProductBody from './MyComponents/ProductBody';
import ChatBox from './MyComponents/ChatBox';
import FaqPage from './MyComponents/FaqPage';
import ProfilePage from './MyComponents/ProfilePage';
import SellItem from './MyComponents/SellItem';
import Payment from './MyComponents/Payment';
import DebitCards from './MyComponents/DebitCard';
import CreditCard from './MyComponents/CreditCard';
import InternetBanking from './MyComponents/InternetBanking';
import Upi from './MyComponents/Upi';
import PaymentSuccess from './MyComponents/PaymentSuccess';
import Cart from './MyComponents/Cart';
import Discussion from './MyComponents/Discussion';
import NewPost from './MyComponents/NewPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Header />
        <Switch> 
			<Route path="/login">
				<Login />
			</Route>
			<Route path="/register">
				<Register />
			</Route>
			<Route path="/product">
				<ProductBody />
			</Route>
			<Route path="/chatbox">
				<ChatBox />
			</Route>
			<Route path="/faqs">
				<FaqPage />
			</Route>
			<Route path="/profile">
				<ProfilePage />
			</Route>
			<Route path="/sell">
				<SellItem />
			</Route>
			<Route path="/payment">
				<Payment />
			</Route>
			<Route path="/debitcard">
				<DebitCards />
			</Route>
			<Route path="/creditcard">
				<CreditCard />
			</Route>
			<Route path="/cart">
				<Cart />
			</Route>
			<Route path="/paymentsuccess">
				<PaymentSuccess />
			</Route>
			<Route path="/internetbanking">
				<InternetBanking />
			</Route>
			<Route path="/upi">
				<Upi />
			</Route>
			<Route path="/discuss">
				<Discussion />
			</Route>
			<Route path="/newpost">
				<NewPost />
			</Route>
			<Route path="/">
				<MainPage />
			</Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
