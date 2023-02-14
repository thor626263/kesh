import React from 'react';

import images from '../../constants/images';

const Collabs = () => {
    return (<div className='collabs'>
        <h2>Influencer Collabs</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae </p>
        <div className='images'>
            <section>
                <img src={images.collabs1} />
                <img src={images.collabs2} />
            </section>
            <section>
                <img src={images.collabs3} />
                <img src={images.collabs4} />
            </section>
        </div>
    </div>);
}

export default Collabs;