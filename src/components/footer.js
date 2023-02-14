import React from 'react';
import { Link } from 'react-router-dom';

import icons from '../constants/icons';

const Footer = () => {
    return (<div className='footer'>
        <div className='main-footer'>
            <section>
                <Link to='/' className='footer-logo-link'>
                    <img src={icons.logoOrange} className='footer-logo' />
                </Link>
                <a href='tel:2085550112'>
                    <img src={icons.phoneOrange} />
                    <span>(208) 555-0112</span>
                </a>
                <a href='mailto:tim.jennings@example.com'>
                    <img src={icons.emailOrange} />
                    <span>tim.jennings@example.com</span>
                </a>
                <div className='social'>
                    <a href='#' target='_blank'>
                        <img src={icons.facebookOrange} />
                    </a>
                    <a href='#' target='_blank'>
                        <img src={icons.twitterOrange} />
                    </a>
                    <a href='#' target='_blank'>
                        <img src={icons.pinterestOrange} />
                    </a>
                    <a href='#' target='_blank'>
                        <img src={icons.instagramOrange} />
                    </a>
                </div>
            </section>
            <section className='links'>
                <h2>Useful links</h2>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link to='/about-us'>About us</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact-us'>Contact us</Link>
                    </li>
                </ul>
            </section>

            <section className='links'>
                <h2>Customer Service</h2>
                <ul>
                    <li>
                        <Link to='#'>Help & FAQs</Link>
                    </li>
                    <li>
                        <Link to='#'>Returns Policy</Link>
                    </li>
                    <li>
                        <Link to='#'>Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link to='#'>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to='#'>Support Center</Link>
                    </li>
                </ul>
            </section>
            <section className='news-letter'>
                <h2>News Letter</h2>
                <input type='email' placeholder='Email address' />
                <button>Submit</button>
            </section>
        </div>
        <div className='copyright'>
            © 2022 Keshroot. All Rights Reserved
        </div>
    </div>);
}

export default Footer;