import React from 'react'

const DigitalAds = () => {
    return (<div className='digital-ads'>
        <h2>Digital Ads</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
        <section className='first-section'>
            <iframe src='https://www.youtube.com/embed/hkXuEpoMhFE' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
        </section>
        <section className='second-section'>
            <iframe src='https://www.youtube.com/embed/CLRGmYlrtUk' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
            <iframe src='https://www.youtube.com/embed/eAvWZAC-QfY' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
        </section>
    </div>);
}

export default DigitalAds;