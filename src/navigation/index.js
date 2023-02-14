import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Home from '../pages/app/home';
import Shop from '../pages/app/shop';
import AboutUs from '../pages/app/aboutus';
import Blog from '../pages/app/blog';
import ContactUs from '../pages/app/contactus';
import Login from '../pages/auth/login';
import Signup from '../pages/auth/signup';
import ForgotPassword from '../pages/auth/forgotpassword';
import ResetPassword from '../pages/auth/resetpassword';
import Cart from '../components/cart';
import ProductCart from '../pages/app/productCart';
import Checkout from '../pages/app/checkout';
import Shipping from '../pages/app/shipping';
import Confirmation from '../pages/app/confirmation';
import MyAccount from '../pages/app/myaccount';

import { authPage, showAuth } from '../redux/slices';

const Navigation = () => {

    const auth = useSelector(state => state.showAuth.value);
    const authPage = useSelector(state => state.authPage.value);

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('loggedin') !== 'true') {
            setTimeout(() => {
                dispatch(showAuth(true));
            }, 12000);
        }
    }, []);

    return (<Router>
        {auth && (<div className='auth-cover' onClick={() => dispatch(showAuth(false))} />)}
        {auth ? authPage === 'login' ? <Login /> : authPage === 'signup' ? <Signup /> : authPage === 'forgotPassword' ? <ForgotPassword /> : <ResetPassword /> : null}
        <Cart />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/blog' element={<Blog post={false} />} />
            <Route path='/blog/:post' element={<Blog post />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/shop/cart' element={<ProductCart />} />
            <Route path='/shop/checkout' element={<Checkout />} />
            <Route path='/shop/shipping' element={<Shipping />} />
            <Route path='/shop/confirmation' element={<Confirmation />} />
            <Route path='/my-account' element={<MyAccount />} />
        </Routes>
    </Router>);
}

export default Navigation;