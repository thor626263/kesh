import React from 'react';

import Footer from '../../components/footer';
import Header from '../../components/header';
import SectionA from '../../components/shop/sectiona';
import SectionB from '../../components/shop/sectionb';

import '../../css/shop.css';

const Shop = () => {
    document.title = 'Shop - keshroot';
    return (<div className='shop'>
        <Header activepage='shop' />
        <SectionA />
        <SectionB />
        <Footer />
    </div>);
}

export default Shop;