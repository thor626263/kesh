import React from 'react';

import icons from '../../constants/icons';
import images from '../../constants/images';

const SectionA = () => {
    return (<><div className='about-top-header'>
        <section className='ls'>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque .doloremque laudantium.</p>
        </section>
        <section className='rs'>
            <div>
                <span>
                    <img src={icons.check} />
                </span>
                <p>Sed ut perspiciatis unde omnis iste natus </p>
            </div>
            <div>
                <span>
                    <img src={icons.check} />
                </span>
                <p>Sed ut perspiciatis unde omnis</p>
            </div>
            <div>
                <span>
                    <img src={icons.check} />
                </span>
                <p>Sed ut perspiciatis unde omnis iste</p>
            </div>
            <div>
                <span>
                    <img src={icons.check} />
                </span>
                <p>Sed ut unde omnis iste natus </p>
            </div>
        </section>
    </div>
        <div className='top-images'>
            <img src={images.about1} />
            <img src={images.about2} />
            <img src={images.about3} />
        </div>
    </>);
}

export default SectionA;