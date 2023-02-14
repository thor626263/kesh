import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

import icons from '../../constants/icons';

const GetToKnow = () => {

    const [data, setData] = useState(null);

    const reduxdata = useSelector(state => state.homeApi.value);

    useEffect(() => {
        if (reduxdata) {
            setData(reduxdata.sectionA);
        };
    }, [reduxdata]);

    return (data ? (
        <div className='getToKnow'>
            <section>
                <img src={data.image} />
            </section>
            <section>
                <h2>{ReactHtmlParser(data.heading)}</h2>
                {ReactHtmlParser(data.content)}
                <Link to='/about-us'>
                    Read more...
                    <img src={icons.rightArrow} />
                </Link>
            </section>
        </div>
    ) : <></>);
}

export default GetToKnow;