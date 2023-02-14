import React, { useEffect, useState } from 'react';

import images from '../constants/images';

import '../css/shippinglayout.css';

const ShippingLayout = ({ children, className }) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        resize();
    }, []);

    const resize = () => {
        if (document.body.offsetWidth <= 905) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    window.addEventListener('resize', resize);

    window.onscroll = () => { };

    return (<div className='shipping-layout'>
        {isMobile && (
            <div className='rs'>
                <main>
                    <div className='product'>
                        <section>
                            <img src={images.shop1} />
                            <div>
                                <span>Keshroot Hair Oil</span>
                                <span>Qtv : 2</span>
                            </div>
                            <span className='price'>Rs. 340.00</span>
                        </section>
                    </div>
                    <div className='discount-code'>
                        <input type='text' placeholder='Discount code' spellCheck={false} />
                        <button>Apply</button>
                    </div>
                    <div className='row' style={{ marginTop: 15 }}>
                        <div className='col'>
                            <span>Subtotal</span>
                            <span>Rs. 340.00</span>
                        </div>

                        <div className='col'>
                            <span>Shipping</span>
                            <span>Calculated at next step</span>
                        </div>
                    </div>
                    <div className='row second' style={{ marginTop: 15 }}>
                        <section>
                            <span>Total</span>
                            <span>Including Rs.1,036.36 in taxes</span>
                        </section>
                        <span>Rs. 340.00</span>
                    </div>
                </main>
            </div>
        )}
        <div className={'ls ' + (className ? className : 'no-class')}>{children}</div>
        {!isMobile && <div className='rs'>
            <main>
                <div className='product'>
                    <section>
                        <img src={images.shop1} />
                        <div>
                            <span>Keshroot Hair Oil</span>
                            <span>Qtv : 2</span>
                        </div>
                        <span className='price'>Rs. 340.00</span>
                    </section>
                </div>
                <div className='discount-code'>
                    <input type='text' placeholder='Discount code' spellCheck={false} />
                    <button>Apply</button>
                </div>
                <div className='row' style={{ marginTop: 15 }}>
                    <div className='col'>
                        <span>Subtotal</span>
                        <span>Rs. 340.00</span>
                    </div>

                    <div className='col'>
                        <span>Shipping</span>
                        <span>Calculated at next step</span>
                    </div>
                </div>
                <div className='row second' style={{ marginTop: 15 }}>
                    <section>
                        <span>Total</span>
                        <span>Including Rs.1,036.36 in taxes</span>
                    </section>
                    <span>Rs. 340.00</span>
                </div>
            </main>
        </div>}
    </div>);
}

export default ShippingLayout;