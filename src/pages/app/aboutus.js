import React from 'react';

import images from '../../constants/images';
import icons from '../../constants/icons';
import videos from '../../constants/videos';

import Footer from '../../components/footer';
import Header from '../../components/header';
// import SectionA from '../../components/aboutus/sectiona';
// import SectionC from '../../components/aboutus/sectionc';
// import SectionB from '../../components/aboutus/sectionb';
// import SectionD from '../../components/aboutus/sectiond';

import '../../css/aboutus.css';

const AboutUs = () => {
    document.title = 'About us - keshroot';
    return (<div className='about-us'>
        <Header activepage='about-us' />
        {/* <SectionA />
        <SectionB />
        <SectionC />
        <SectionD /> */}
        <img src={images.aboutFeature} className='feature' />
        <div className='about-section'>
            <img src={images.productAbout} />
            <section>
                <h2>Healthy Roots, Happy Hair</h2>
                <p>Nourish your hair with the power of 13 rich  ingredients Say goodbye to dry, dull hair with Keshroot Hair Oil's powerful formula Your hair care partner for life, Keshroot Hair Oil</p>
                <div className='rs'>
                    <div>
                        <span>
                            <img src={icons.check} />
                        </span>
                        <p>Promotes new hair growth</p>
                    </div>
                    <div>
                        <span>
                            <img src={icons.check} />
                        </span>
                        <p>Natural - Herbal oil</p>
                    </div>
                    <div>
                        <span>
                            <img src={icons.check} />
                        </span>
                        <p>Treat hair problems from roots</p>
                    </div>
                    <div>
                        <span>
                            <img src={icons.check} />
                        </span>
                        <p>Nourishing, Relaxing & Aromatic</p>
                    </div>
                    <div>
                        <span>
                            <img src={icons.check} />
                        </span>
                        <p>Prevent hair loss and baldness</p>
                    </div>
                </div>
            </section>
        </div>

        <div className='about-text-content'>
            <h2>Who we are</h2>
            <p>Keshroot - founded by a husband and wife duo, Nitesh and Pragna Tala, who was frustrated with the multitude of hair products on the market that promised to treat and beautify hair, but ultimately fell short. The founders believed that the key to healthy, beautiful hair lay in treating the root of the problem, not just the surface.</p>
            <p>With this in mind, the founders began researching ingredients and formulating a product that would strengthen the roots of the hair. Through extensive experimentation and testing, they developed a unique blend of ingredients that nourished the hair at its source and left it looking shiny and lustrous. Their hard work paid off, and Keshroot was born.</p>
            <p>With Keshroot, we want to be more than just a hair care brand, we want to be a hair care partner. We believe in providing customers with a product that truly addresses their hair concerns, and we stand behind the effectiveness of their formula. With Keshroot, you can say goodbye to lacklustre, damaged hair and hello to strong, healthy, and beautiful hair.</p>
        </div>

        <video className='about-video' controls>
            <source src={videos.aboutVideo} />
        </video>
        <Footer />
    </div>);
}

export default AboutUs;