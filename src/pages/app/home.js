import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../../components/header';
import Slider from '../../components/home/slider';
import GetToKnow from '../../components/home/getToKnow';
import BrandUSPs from '../../components/home/brandUSPs';
import SedUt from '../../components/home/sedut';
import Ingredients from '../../components/home/ingredients';
import DigitalAds from '../../components/home/digitalads';
import Collabs from '../../components/home/collabs';
import YoutubeReviews from '../../components/home/youtubereviews';
import WhatPeople from '../../components/home/whatpeople';
import Avaible from '../../components/home/avaible';
import Instagram from '../../components/home/instagram';
import Footer from '../../components/footer';
import { fetchHomeApi } from '../../redux/slices';

const Home = () => {

    document.title = 'keshroot';

    const dispatch = useDispatch();

    useEffect(() => {
        resizeIframe();
        dispatch(fetchHomeApi());
    }, [])

    const resizeIframe = () => {
        const iframes = document.getElementsByTagName('iframe');

        for (let i = 0; i < iframes.length; i++) {
            iframes[i].style.height = `${iframes[i].offsetWidth / 2}px`
        }
    };

    window.onresize = () => resizeIframe();

    return (<div className='container'>
        <Header activepage='home' />
        <Slider />
        <GetToKnow />
        <BrandUSPs />
        <SedUt />
        <Ingredients />
        <DigitalAds />
        <Collabs />
        <YoutubeReviews />
        <WhatPeople />
        <Avaible />
        <Instagram />
        <Footer />
    </div>);
}

export default Home;