import './App.css';
import { useState } from 'react';
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
import RequestPage from './MyComponents/RequestPage';
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
			
			<Route exact path="/login">
				<Login />
			</Route>
			<Route exact path="/register">
				<Register />
			</Route>
			<Route exact path="/product">
				<ProductBody />
			</Route>
			<Route exact path="/chatbox">
				<ChatBox />
			</Route>
			<Route exact path="/faqs">
				<FaqPage />
			</Route>
			<Route exact path="/profile">
				<ProfilePage />
			</Route>
			<Route exact path="/sell">
				<SellItem />
			</Route>
			<Route exact path="/payment">
				<Payment />
			</Route>
			<Route exact path="/debitcard">
				<DebitCards />
			</Route>
			<Route exact path="/creditcard">
				<CreditCard />
			</Route>
			<Route exact path="/cart">
				<Cart />
			</Route>
			<Route exact path="/paymentsuccess">
				<PaymentSuccess />
			</Route>
			<Route exact path="/internetbanking">
				<InternetBanking />
			</Route>
			<Route exact path="/upi">
				<Upi />
			</Route>
			<Route exact path="/discuss">
				<Discussion />
			</Route>
			<Route exact path="/newpost">
				<NewPost />
			</Route>
			<Route exact path="/">
				<MainPage />
			</Route>
			<Route exact exact path="/request">
				<RequestPage />
			</Route>
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
