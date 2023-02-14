import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import icons from '../../constants/icons';

const BrandUSPs = () => {

    const [data, setData] = useState(null);

    const reduxdata = useSelector(state => state.homeApi.value);

    useEffect(() => {
        if (reduxdata) {
            setData(reduxdata.sectionB);
        };
    }, [reduxdata]);

    // useEffect(() => {
    //     console.log('data is', data);
    // }, [data])

    return (data ? (
        <div className='brand-usps'>
            <h2>{data.heading}</h2>
            <div className='brand-usps-cards'>
                {
                    data.cards.map(item => (
                        <section>
                            <img src={item.image} />
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </section>
                    ))
                }
            </div>
        </div>
    ) : <></>);
}

export default BrandUSPs;