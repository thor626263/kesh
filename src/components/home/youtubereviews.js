import React from 'react'

const YoutubeReviews = () => {
    return (<div className='youtube-reviews'>
        <h2>YouTube Reviews</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae</p>
        <div className='videos'>
            <section>
                <iframe src='https://www.youtube.com/embed/G1GAlC7lPcI' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
            </section>
            <section>
                <iframe src='https://www.youtube.com/embed/CLRGmYlrtUk' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
                <iframe src='https://www.youtube.com/embed/I3pLliWH1lQ' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
                <iframe src='https://www.youtube.com/embed/68KHrx8PvMA' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
            </section>
        </div>
    </div>);
}

export default YoutubeReviews;