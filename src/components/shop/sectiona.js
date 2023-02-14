import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import icons from '../../constants/icons';
import images from '../../constants/images';

import { showCart } from '../../redux/slices';

const SectionA = () => {

    const [index, setIndex] = useState(0);
    const [mlIndex, setMlIndex] = useState(0);
    const [sizes, setSizes] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [imageHeight, setImageHeight] = useState(0);

    const mainImageRef = useRef();
    const dispatch = useDispatch();

    const productImages = [];

    for (let i = 0; i < 5; i++) {
        productImages.push({ image: images['shop' + (i + 1)] })
    };

    useEffect(() => {
        const imgs = document.getElementsByClassName('imgs');
        if (index !== null) {
            for (let i = 0; i < imgs.length; i++) {
                imgs[i].style.border = 'none';
            }
            imgs[index].style.border = '1px solid #9C4727'
        }
    }, [index]);

    const handleUp = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const handleDown = () => {
        if (index < productImages.length - 1) {
            setIndex(index + 1)
        }
    };

    useEffect(() => {
        setSizes([
            { size: '100 ml - Pack of 1' },
            { size: '200 ml - Pack of 2' },
            { size: '300 ml - Pack of 3' }
        ]);

        changeImageHeight();
    }, []);

    const handleQuantityAdd = () => {
        setQuantity(quantity + 1);
    }

    const handleQuantitySubtract = () => {
        if (quantity !== 1) {
            setQuantity(quantity - 1);
        }
    };

    const changeImageHeight = () => {
        mainImageRef.current.style.height = (mainImageRef.current.offsetWidth) + 'px';
        const imgs = document.getElementsByClassName('imgs');
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.height = (mainImageRef.current.offsetWidth / 5) - 10 + 'px';
            imgs[i].style.width = (mainImageRef.current.offsetWidth / 6) + 'px';
            document.querySelector('.images').style.width = (mainImageRef.current.offsetWidth / 6) + 'px';
        }
    };

    window.addEventListener('resize', changeImageHeight);

    return (<div className='product'>
        <section id='ls'>
            <div className='images'>
                <img src={icons.arrowUp} id='up' onClick={handleUp} />
                <img src={icons.arrowDown} id='down' onClick={handleDown} />
                {
                    productImages.map((item, index) => (
                        <img src={item.image} onClick={() => setIndex(index)} className='imgs' />
                    ))
                }
            </div>
            <img src={index === null ? images.feature : productImages[index].image} className='main-image' style={{ height: imageHeight }} ref={mainImageRef} />
        </section>
        <section id='rs'>
            <h2>Keshroot Bhumija Hair Oil - Ayurvedic Hair Oil For Hair Growth</h2>
            <div className='price'>
                <h3>{'₹' + (160 * (mlIndex + 1)) + '.00'}</h3>
                <span id='real-price'>{'₹' + (170 * (mlIndex + 1)) + '.00'}</span>
                <span id='discount'>10% off</span>
            </div>
            <div className='tax'>Tax included.</div>
            <h3>About product</h3>
            <p>Keshroot Ayurvedic Oil is an all-natural hair care solution made from 13 rich herbs and extracts that nourish the roots and promote healthy, strong hair.</p>
            <div className='size'>
                <h3>Size</h3>
                <span id='ml'>{sizes ? sizes[mlIndex].size : 0}</span>
                {sizes && (
                    <div className='sizes'>
                        {
                            sizes.map((item, index) => (
                                <span className={mlIndex === index ? 'ml active' : 'ml'} onClick={() => setMlIndex(index)}>{item.size}</span>
                            ))
                        }
                    </div>
                )}
            </div>
            <h3>Quantity</h3>
            <div className='purchase'>
                <div className='quantity'><span onClick={handleQuantitySubtract}><span></span></span>{quantity}<span onClick={handleQuantityAdd}>+</span></div>
                <div className='add-to-cart' onClick={() => dispatch(showCart(true))}>Add to cart</div>
                <div className='buy-now'>Buy now</div>
            </div>
        </section>
    </div>);
}

export default SectionA;