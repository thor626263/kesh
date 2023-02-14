import React from 'react';

import icons from '../../constants/icons';

const Avaible = () => {

    const data = [
        {
            image: icons.grofers,
            link: '/',
        },
        {
            image: icons.amazon,
            link: '/',
        },
        {
            image: icons.metro,
            link: '/',
        },
        {
            image: icons.bigbasket,
            link: '/',
        },
        {
            image: icons.flipkart,
            link: '/',
        },
        {
            image: icons.ratnadeep,
            link: '/',
        },
        {
            image: icons.foodhall,
            link: '/',
        },
        {
            image: icons.paytmmall,
            link: '/',
        },
        {
            image: icons.swiggyinstamart,
            link: '/',
        },
        {
            image: icons.whsmith,
            link: '/',
        },
    ]

    return (<div className='avaible'>
        <h2>We are available on</h2>
        <section>
            {
                data.map(item => (
                    <a href={item.link} target='_blank'>
                        <img src={item.image} />
                    </a>
                ))
            }
        </section>
    </div>);
}

export default Avaible;