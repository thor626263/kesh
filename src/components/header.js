import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import icons from '../constants/icons';
import images from '../constants/images';

import Offer from './offer';

import { showAuth, showCart } from '../redux/slices';

const Header = ({ activepage }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClose = () => {
        document.querySelector('.cover').style.display = 'none';
        document.querySelector('.side-menu').style.left = '-500px';
    }

    const handleOpen = () => {
        document.querySelector('.cover').style.display = 'flex';
        document.querySelector('.side-menu').style.left = '0';
    }

    useEffect(() => {
        handleClose();
        window.scrollTo(0, 0);
    }, [])

    return (<div className='header'>
        <Offer />
        <div className='cover' onClick={handleClose}></div>
        {/* top section */}
        <div className='main-header-section'>
            <span className='line'></span>
            <div className='header-section'>
                <div className='top'>
                    {/* left side */}
                    <div className='ls'>
                        <div className='availability'>
                            <img src={icons.location} className='location-icon' />
                            <span>Check availability</span>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='rs'>
                        <div className='icons'>
                            <a href='https://www.facebook.com/' target='_blank'>
                                <img src={icons.facebookBlack} />
                            </a>
                            <a href='https://www.twitter.com/' target='_blank'>
                                <img src={icons.twitterBlack} />
                            </a>
                            <a href='https://www.instagram.com/' target='_blank'>
                                <img src={icons.instagramBlack} />
                            </a>
                            <a href='https://www.youtube.com/' target='_blank'>
                                <img src={icons.youtubeBlack} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* nav bar */}
                <div className='nav-bar'>
                    <section className='brand-logo'>
                        <Link to='/'>
                            <img src={images.logo} className='logo' />
                        </Link>
                    </section>
                    <section className='navigations'>
                        <Link to='/' className={activepage === 'home' ? 'active-page' : null}>Home</Link>
                        <Link to='/shop' className={activepage === 'shop' ? 'active-page' : null} >Shop</Link>
                        <Link to='/about-us' className={activepage === 'about-us' ? 'active-page' : null}>About us</Link>
                        <Link to='/blog' className={activepage === 'blog' ? 'active-page' : null}>Blog</Link>
                        <Link to='/contact-us' className={activepage === 'contact-us' ? 'active-page' : null}>Contact us</Link>
                    </section>
                    <section className='third-section'>
                        <div className='icons'>
                            <img src={icons.search} />
                            <img src={icons.user} onClick={() => localStorage.getItem('loggedin') !== 'true' ? dispatch(showAuth(true)) : navigate('/my-account')} />
                            <img src={icons.shoppingBag} onClick={() => dispatch(showCart(true))} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div className='mobile-nav'>
            <section id='menu-section'>
                <div className='menu-icon' onClick={handleOpen}>
                    <img src={icons.menu} />
                </div>
            </section>
            <section className='mobile-logo'>
                <Link to='/'>
                    <img src={images.logo} className='mo-logo' />
                </Link>
            </section>
            <section className='third-section'>
                <div className='icons'>
                    <img src={icons.search} />
                    <img src={icons.user} onClick={() => dispatch(showAuth(true))} />
                    <img src={icons.shoppingBag} onClick={() => dispatch(showCart(true))} />
                </div>
            </section>
        </div>
        <div className='side-menu'>
            <main>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/about-us'>About us</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact-us'>Contact us</Link>
            </main>
            <div className='close' onClick={handleClose}>X</div>
        </div>
    </div >);
}

export default Header;