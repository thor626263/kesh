import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import images from '../constants/images';

import { showCart } from '../redux/slices';

const Cart = () => {

    const [quantity, setQuantity] = useState(1);
    const [subTotal, setSubTotal] = useState(170);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setSubTotal(170 * quantity);
    }, [quantity]);

    const cart = useSelector(state => state.showCart.value);

    return (cart ? (
        <div className='cart'>
            <div className='top'>
                <h2>Your Cart</h2>
                <div className='close' onClick={() => dispatch(showCart(false))}>x</div>
            </div>
            <div className='product'>
                <img src={images.shop1} />
                <div className='price'>
                    <span>Keshroot Hair Oil</span>
                    <span>Rs. 170.00</span>
                </div>
                <div className='quantity'>
                    <div className='desc' onClick={() => { if (quantity > 1) setQuantity(quantity - 1) }}><span></span></div>
                    <div className='amount'>{quantity}</div>
                    <div className='enc' onClick={() => setQuantity(quantity + 1)}>+</div>
                </div>
            </div>
            <div className='subtotal'>
                <section>
                    <span>SUBTOTAL</span>
                    <span>RS. {subTotal}.00</span>
                </section>
                <p>Shipping & taxes calculated at checkout</p>
            </div>
            <button className='checkout' onClick={() => { navigate('/shop/checkout'); dispatch(showCart(false)) }}>Processd To Checkout</button>
            <button className='view-cart' onClick={() => { navigate('/shop/cart'); dispatch(showCart(false)) }}>View Cart</button>
        </div>
    ) : <></>);
}

export default Cart;