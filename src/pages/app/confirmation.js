import React, { useEffect } from 'react';

import ShippingLayout from '../../components/shippingLayout';

import '../../css/confirmation.css';

const Confirmation = () => {

    document.title = 'Thank You';

    useEffect(() => {
        resize();
    }, []);

    const resize = () => {
        const email = document.getElementsByClassName('email');

        for (let i = 0; i < email.length; i++) {
            if (email[i].offsetWidth > (document.body.offsetWidth / 5)) {
                email[i].classList.add('overflow');
                email[i].classList.add('overflow');
            } else {
                email[i].classList.remove('overflow');
            }
        }
    };

    window.addEventListener('resize', resize);

    return (<ShippingLayout className='confirmation'>
        <div className='top'>
            <span>Order #UPIVN4996*23_15</span>
            <h2>Thank you jay</h2>
        </div>
        <div className='map'>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.2579209994!2d72.43965588570215!3d23.02018176300004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1676093723738!5m2!1sen!2sin' allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
        </div>
        <div className='order-conf'>
            <h3>Your order is confirmed</h3>
            <span>You’ll receive a confirmation email with your order number shortly.</span>
        </div>
        <div className='order-updated sec'>
            <h3>Your order is confirmed</h3>
            <span>You’ll receive a confirmation email with your order number shortly.</span>
        </div>
        <div className='sec order-info'>
            <h2>Order updates</h2>
            <main>
                <section className='ls'>
                    <span>Contact information</span>
                    <p className='email'>jay@zerogravitycommunications.com</p>
                    <span>Shipping address</span>
                    <p>Jay shah
                        <br />shuo nhry
                        <br /> 890025 ahmedabad GJ
                        <br /> India
                        <br /> 070963 12821</p>
                    <span>Shipping method</span>
                    <p>Standard (cash on delivery)</p>
                </section>
                <section className='rs'>
                    <span>Payment method</span>
                    <p className='email'>jay@zerogravitycommunications.com</p>
                    <span>Billing address</span>
                    <p>Jay shah
                        <br /> shuo nhry
                        <br /> 890025 ahmedabad GJ
                        <br /> India
                        <br /> 070963 12821</p>
                </section>
            </main>
        </div>
    </ShippingLayout>);
}

export default Confirmation;