import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import icons from '../../constants/icons';

import ShippingLayout from '../../components/shippingLayout';

import '../../css/shipping.css';

const Shipping = () => {

    document.title = 'Shipping - keshroot';

    const navigate = useNavigate();

    const emailRef = useRef();
    const addressRef = useRef();

    useEffect(() => {
        resize();
        document.getElementsByName('radio-1')[0].checked = 'checked';
    }, []);

    const resize = () => {
        if (emailRef.current.offsetWidth > (document.body.offsetWidth / 3)) {
            emailRef.current.classList.add('overflow');
            addressRef.current.classList.add('overflow');
        } else {
            addressRef.current.classList.remove('overflow');
        }
    };

    window.addEventListener('resize', resize);

    return (<ShippingLayout className='shipping'>
        <h2>Shipping Information</h2>
        <section>
            <div className='row first'>
                <span>Contact</span>
                <div className='email' ref={emailRef}>jay@zerogravitycommunications.com</div>
                <div className='btn' onClick={() => navigate('/shop/checkout')}>Change</div>
            </div>
            <div className='row second'>
                <span>Ship to</span>
                <div className='email' ref={addressRef}>Secor 28 gh-6, 382028 Gandhinagar GJ, India</div>
                <div className='btn' onClick={() => navigate('/shop/checkout')}>Change</div>
            </div>
        </section>
        <h2>Shipping method</h2>
        <section className='second'>
            <div className='row'>
                <label className='radio-container'>
                    <input type='radio' name='radio-1' />
                    <div className='checkmark' />
                </label>
                <span>Standard</span>
            </div>
            <div className='row'>
                <label className='radio-container'>
                    <input type='radio' name='radio-1' />
                    <div className='checkmark' />
                </label>
                <span>COD</span>
            </div>
        </section>
        <div className='btn-section'>
            <div className='back' onClick={() => navigate('/shop/checkout')}>
                <img src={icons.leftArrow} />
                <span>Return to Information</span>
            </div>
            <button onClick={() => navigate('/shop/confirmation')}>Continue to Payment</button>
        </div>
    </ShippingLayout>);
}

export default Shipping;