import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import icons from '../../constants/icons';

const WhatPeople = () => {

    const [data, setData] = useState(null);
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const reduxdata = useSelector(state => state.homeApi.value);

    useEffect(() => {
        if (reduxdata) {
            setData(reduxdata.sectionE);
        };
    }, [reduxdata]);

    useEffect(() => {
        changeView();
    }, [])

    const handleNext = () => {
        if (index < data.reviews.length - 1) {
            setIndex(isMobile ? index + 1 : index + 2);
        }
    };

    const handlePrevios = () => {
        if (index > 0) {
            setIndex(isMobile ? index - 1 : index - 2)
        }
    };

    const changeView = () => {
        if (document.body.offsetWidth <= 1180) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    window.addEventListener('resize', changeView);

    return (data ? (
        <div className='what-people'>
            <h2>{data.heading}</h2>
            {/* <p>{data.content}</p> */}
            <main>
                <div className='label previos' onClick={handlePrevios}>Previos<span></span></div>
                <div className='label next' onClick={handleNext}><span></span>Next</div>
                <section>
                    <div className='sub-section first'>
                        <h3>
                            {data.reviews[index].personName}
                            <span>{'0' + (index + 1)}</span>
                        </h3>
                        <p>{data.reviews[index].review}</p>
                        {/* <span>{data.reviews[index].review}</span> */}
                        <div className='time'>September 24, 2017 | 1:43 PM</div>
                        <img src={icons.quotes} />
                    </div>
                </section>
                {!isMobile && (
                    <section>
                        {data.reviews[index + 1] && (
                            <div className='sub-section'>
                                <h3>
                                    {data.reviews[index + 1].personName}
                                    <span>{'0' + (index + 2)}</span>
                                </h3>
                                <p>{data.reviews[index + 1].review}</p>
                                {/* <span>{data.reviews[index + 1].review}</span> */}
                                <div className='time'>September 24, 2017 | 1:43 PM</div>
                                <img src={icons.quotes} />
                            </div>
                        )}
                    </section>
                )}
            </main>
        </div>
    ) : <></>)
}

export default WhatPeople;