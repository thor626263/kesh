import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import images from '../../constants/images';

import Footer from '../../components/footer';
import Header from '../../components/header';

import '../../css/myaccount.css';

const MyAccount = () => {

    document.title = 'My account - Keshroot';

    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(false);
    const [showAddresses, setShowAddresses] = useState(false);

    useEffect(() => {
        resize();
    }, []);

    const resize = () => {
        if (document.body.offsetWidth <= 950) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    window.addEventListener('resize', resize);

    const orders = [
        {
            productImage: images.shop1,
            productName: 'Hair Oil',
            price: 170,
            paymentStatus: 'Pending',
            deliveryStatus: 'Pending',
            date: 'February 10, 2023'
        },

        {
            productImage: images.shop1,
            productName: 'Hair Oil',
            price: 170,
            paymentStatus: 'Paid',
            deliveryStatus: 'Delivered',
            date: 'March 23, 2022'
        },
        {
            productImage: images.shop1,
            productName: 'Hair Oil',
            price: 170,
            paymentStatus: 'Paid',
            deliveryStatus: 'Delivered',
            date: 'January 12, 2020'
        },
        {
            productImage: images.shop1,
            productName: 'Hair Oil',
            price: 170,
            paymentStatus: 'Paid',
            deliveryStatus: 'Delivered',
            date: 'January 7, 2020'
        },
        {
            productImage: images.shop1,
            productName: 'Hair Oil',
            price: 170,
            paymentStatus: 'Paid',
            deliveryStatus: 'Delivered',
            date: 'January 5, 2019'
        },
    ];

    return (<div className='my-account'>
        <Header />
        {showAddresses && (
            <>
                <div className='cover' onClick={() => setShowAddresses(false)} />
                <div className='addresses-sec'>
                    <h2>My Addresses</h2>
                    <div className='sec'>
                        A-64, pratap nagar, shanand, ahmedabad, gujarat, india - 382345
                    </div>
                    <div className='sec'>
                        A-64, pratap nagar, shanand, ahmedabad, gujarat, india - 382345
                    </div>
                </div>
            </>
        )}
        <div className='cont'>
            <h1>My Account</h1>
            <main>
                {isMobile && (
                    <div className='rs'>
                        <h2>Account Details</h2>
                        <section>
                            <span><b>Name: </b>Harsh Patel</span>
                            <span><b>Email ID: </b>harsh007@gmail.com</span>
                            <span><b>Phone Number: </b>+91123456789</span>
                            <button className='addresses' onClick={() => setShowAddresses(true)}>Addresses (2)</button>
                            <button className='logout' onClick={() => { localStorage.removeItem('loggedin'); navigate('/') }}>Logout</button>
                        </section>
                    </div>
                )}
                <div className='ls'>
                    <h2>My Orders</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Product</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Delivery Status</th>
                                <th>Payment Status</th>
                            </tr>
                            {
                                orders.map(item => (
                                    <tr>
                                        <td>
                                            <div onClick={() => navigate('/shop')}>
                                                <img src={item.productImage} />
                                                <span>{item.productName}</span>
                                            </div>
                                        </td>
                                        <td>
                                            {item.date}
                                        </td>
                                        <td>{item.price + '.00 INR'}</td>
                                        <td>{item.deliveryStatus}</td>
                                        <td>{item.paymentStatus}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {!isMobile && (
                    <div className='rs'>
                        <h2>Account Details</h2>
                        <section>
                            <span><b>Name: </b>Harsh Patel</span>
                            <span><b>Email ID: </b>harsh007@gmail.com</span>
                            <span><b>Phone Number: </b>+91123456789</span>
                            <button className='addresses' onClick={() => setShowAddresses(true)}>Addresses (2)</button>
                            <button className='logout' onClick={() => { localStorage.removeItem('loggedin'); navigate('/') }}>Logout</button>
                        </section>
                    </div>
                )}
            </main>
        </div>
        <Footer />
    </div>);
}

export default MyAccount;