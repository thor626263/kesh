import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import icons from '../../constants/icons';
import images from '../../constants/images';

const Ingredients = () => {

    const [data, setData] = useState(null);

    const reduxdata = useSelector(state => state.homeApi.value);

    useEffect(() => {
        if (reduxdata) {
            setData(reduxdata.sectionD);
        };
    }, [reduxdata]);

    return (data ? (
        <div className='ingredients'>

            <img src={images.bottomArt} className='bottom-art' />

            <h2>{data.heading}</h2>
            <p>{data.content}</p>
            <div className='items'>
                {
                    data.cards.map(item => (
                        <div className='item'>
                            <div className='card'>
                                <img src={item.image} />
                                <div className='text-content'>{item.content}</div>
                            </div>
                            <span>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    ) : <></>);
}

export default Ingredients;