import React, { useEffect, useRef, useState } from 'react';

import icons from '../../constants/icons';
import images from '../../constants/images';

const SectionB = () => {
    const [imgs, setImgs] = useState(null);
    const scrollRef = useRef(null);

    const res = [];

    useEffect(() => {
        for (let i = 0; i < 8; i++) {
            res.push({ image: images['instagram' + (i + 1)] });
        };

        setImgs(res);
    }, []);

    const handleRightScroll = () => {
        const width = document.querySelector('.scroll-img').offsetWidth;
        scrollRef.current.scrollBy((width * 10), 0)
    }

    const handleLeftScroll = () => {
        const width = document.querySelector('.scroll-img').offsetWidth;
        scrollRef.current.scrollBy((width * -10), 0)
    }

    return (<div className='about-slider'>
        <section id='ls'>
            <h2>Sed ut perspiciatis unde omn iste natus error sittatem accusantium</h2>
            <div className='btns'>
                <span onClick={handleLeftScroll}>
                    <img src={icons.aboutLeftArrow} className='scroll-img' />
                </span>
                <span onClick={handleRightScroll}>
                    <img src={icons.aboutRightArrow} />
                </span>
            </div>
        </section>
        {imgs && (
            <section id='rs' ref={scrollRef}>
                {
                    imgs.map(item => (
                        <img src={item.image} />
                    ))
                }
            </section>
        )}
    </div>);
}

export default SectionB;