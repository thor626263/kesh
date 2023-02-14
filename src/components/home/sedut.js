import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

import icons from '../../constants/icons';
import images from '../../constants/images';

const SedUt = () => {

    const [data, setData] = useState(null);

    const reduxdata = useSelector(state => state.homeApi.value);

    useEffect(() => {
        if (reduxdata) {
            setData(reduxdata.sectionC);
        };
    }, [reduxdata]);

    return (data ? (
        <div className='sedut'>
            <div className='ls'>
                <h2>{data.heading}</h2>
                {ReactHtmlParser(data.content)}
                <div className='images'>
                    <img src={icons.purity} />
                    <img src={icons.ethically} />
                    <img src={icons.natural} />
                    <img src={icons.authentically} />
                </div>
            </div>
            <div className='rs'>
                <video controls>
                    <source src={data.image} />
                </video>
            </div>
        </div>
    ) : <></>);
}

export default SedUt;