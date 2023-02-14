import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import images from '../../constants/images';

import Footer from '../../components/footer';
import Header from '../../components/header';

import '../../css/blog.css';

const Blog = ({ post }) => {

    document.title = 'Blog - keshroot';

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        getBodyWidth();
    }, []);

    const data = [];
    const recentPostData = [];

    if (post) {
        window.scrollTo(0, 0);
    }

    for (let i = 0; i < 3; i++) {
        data.push({
            thumbnail: images['blog' + (i + 1)],
            title: `What is Kesh Root Ayurvedic Hair Oil and Its Ingredients?`,
            description: `Kesh Root Ayurvedic Hair Oil is a natural and herbal hair oil that has been
traditionally used for centuries in Ayurvedic medicine to promote healthy hair
growth and prevent hair loss.The word "Kesh" means hair in Sanskrit, and this oil is
specifically designed to nourish and revitalize the hair and scalp.`,
            postedAt: 'February 13, 2023',
            postedBy: 'Admin keshroot',
        });
    };

    for (let i = 0; i < 3; i++) {
        recentPostData.push({
            thumbnail: images.feature,
            description: 'vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum',
        });
    };

    const getBodyWidth = () => {
        if (document.body.offsetWidth <= 920) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    window.addEventListener('resize', getBodyWidth);

    return (<div className='blog-section'>
        <Header activepage='blog' />
        {!post ? (<h1>Blog</h1>) : <div style={{ marginTop: 50, }}></div>}
        <div className='blog'>
            {!isMobile && (
                <div className='recent-posts'>
                    <h2>Recent posts</h2>
                    {
                        recentPostData.map(item => (
                            <Link className='recent-post' to='/blog/what-is-kesh-root-ayurvedic-hair-oil-and-its-ingredients'>
                                <img src={item.thumbnail} />
                                <p>{item.description}</p>
                            </Link>
                        ))
                    }
                </div>
            )}
            <div className='blog-posts'>
                {!post ? (
                    <>
                        {
                            data.map(item => (
                                <div className='blog-post'>
                                    <img src={item.thumbnail} />
                                    <h2>{item.title}</h2>
                                    <ul>
                                        <li>{item.postedAt}</li>
                                        <li>{item.postedBy}</li>
                                    </ul>
                                    <p>{item.description}</p>
                                    <Link to='/blog/what-is-kesh-root-ayurvedic-hair-oil-and-its-ingredients'>Read more...!</Link>
                                </div>
                            ))
                        }
                    </>
                ) : (
                    <div className='post-view'>
                        <h1>What is Kesh Root Ayurvedic Hair Oil and Its Ingredients?</h1>
                        <ul>
                            <li>November 16, 2022</li>
                            <li>Posted by Admin keshroot</li>
                        </ul>
                        <div className='content'>
                            <img src={images.blog1} />
                            <p>Kesh Root Ayurvedic Hair Oil is a natural and herbal hair oil that has been
                                traditionally used for centuries in Ayurvedic medicine to promote healthy hair
                                growth and prevent hair loss. The word "Kesh" means hair in Sanskrit, and this oil is
                                specifically designed to nourish and revitalize the hair and scalp.</p>
                            <p>This oil is a perfect example of our commitment to natural, holistic hair care. This
                                ayurvedic herbal hair oil is made with a blend of powerful ingredients, including
                                Bhringraj, a traditional Ayurvedic herb known for its ability to promote hair growth
                                and prevent hair loss. Additionally, we've added Amla, a fruit rich in Vitamin C, to
                                strengthen your hair and prevent hair loss, and a blend of other ayurvedic herbs and
                                oils to nourish your scalp and hair.</p>
                            <p>At Keshroot, we embrace the traditional Ayurvedic method of Til Pak Vidhi for
                                preparing and using oil for optimal hair health. This ancient practice involves
                                massaging the oil into the scalp and leaving it to penetrate for a period of time
                                before washing it out. This allows the nourishing oils to deeply penetrate the scalp
                                and hair, promoting strong and healthy growth.</p>
                            <p>To ensure the highest quality results, we carefully select the finest ingredients and
                                heat them in a copper vessel over a low flame. This process allows the oils to fully
                                absorb the beneficial nutrients and properties of the ayurvedic herbs and spices in
                                our blend. Once the oil has been prepared, we filter it and bottle it for easy use.</p>
                            <p>By incorporating Til Pak Vidhi into your hair care routine, you can experience the
                                therapeutic benefits of Ayurveda and improve the overall health of your scalp and
                                hair. At Keshroot, we are committed to following this ancient tradition and delivering
                                the best possible results to our customers.</p>
                            <p>What makes Keshroot Ayurvedic</p>
                            <ul>
                                <li>Made from Herbs & Extracts
                                    (Blended with finest handpicked herbs and extracts)</li>
                                <li>Nourishes the roots
                                    (Nourishes the roots for healthy, strong hair)</li>
                                <li>Authentic Ayurvedic Method
                                    (An ayurvedic formulation that solves the most intricate hair-related
                                    problems.)</li>
                            </ul>
                            <p>We've blended together 11 of the most nourishing natural oils to create a powerhouse
                                formula for your hair. Our blend includes sesame, coconut, walnut, castor, black seed,
                                amla, onion oil, henna oil, rosemary oil, lemon oil, and neem oil, as well as extracts
                                from sunflower oil, rice bran oil, olive oil, tea tree oil, vitamin E, and coffee bean oil.</p>
                            <p>Each of these oils brings its own unique set of benefits to the roots and hair. From
                                promoting growth and preventing hair loss to nourishing and strengthening the
                                hair, our oil has been carefully crafted to deliver the best possible results for your hair.
                                So if you're looking for a natural, effective solution for all your hair care needs, look no
                                further than Keshroot.</p>
                            <p>One of the key ingredients in Kesh Root Ayurvedic Hair Oil is Amla, a fruit that is
                                widely used in Ayurvedic medicine for its nourishing and revitalizing properties. Amla
                                is rich in Vitamin C, which is essential for healthy hair growth and is also known to
                                help strengthen hair and prevent hair loss.</p>
                            <p>The oil also contains a blend of other Ayurvedic herbs and oils, such as Shikakai, a
                                shrub that is known for its hair-conditioning and hair-cleansing properties, and
                                Neem, a tree that is traditionally used to treat various skin and hair conditions. These
                                herbs and oils are carefully blended to create a potent and effective formula that can
                                promote hair growth and prevent hair loss.</p>
                            <p>The ingredients in Kesh Root Ayurvedic Hair Oil work together to nourish the hair
                                and scalp and improve the health of the hair. By using this ayurvedic hair oil
                                regularly, you can expect to see a number of benefits, including:</p>
                            <ul>
                                <li>Improved hair growth: The combination of Bhringraj and other ayurvedic
                                    herbs in Kesh Root Ayurvedic Hair Oil is believed to promote hair growth by
                                    improving blood circulation to the scalp and nourishing the hair follicles.</li>
                                <li>Reduced hair loss: It makes a perfect ayurvedic oil for hair loss due to the use
                                    of Bhringraj and other ayurvedic herbs in it. It improves the health of the scalp
                                    and strengthens the hair.</li>
                                <li>Healthier hair and scalp: The ingredients in Kesh Root Ayurvedic Hair Oil,
                                    including Bhringraj, Amla, and other ayurvedic herbs, are specifically
                                    formulated to nourish and rejuvenate the hair and scalp. This results in
                                    healthier, stronger, and more vibrant hair.</li>
                            </ul>
                        </div>
                        <Comment />
                    </div>
                )}

                {isMobile && (
                    <div className='recent-posts' style={{ marginTop: 50 }}>
                        <h2>Recent posts</h2>
                        {
                            recentPostData.map(item => (
                                <Link className='recent-post' to='/blog/how-bhumija-ayurvedic-hair-oil-helps-in-reducing-gray-hair'>
                                    <img src={item.thumbnail} />
                                    <p>{item.description}</p>
                                </Link>
                            ))
                        }
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </div>);
};

const Comment = () => {

    const initialValues = {
        firstName: '',
        email: '',
        message: '',
    };

    const validationSchema = yup.object({
        firstName: yup.string().required('Please enter your first name'),
        email: yup.string().email('Please enter valid email').required('Please enter your email'),
        message: yup.string().required('Please enter your message'),
    });

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: () => alert('Form submitted'),
    });

    return (<div className='comment'>
        <section>
            <div className='row'>
                <input type='text' placeholder='First name' onChange={handleChange('firstName')} />
                {errors.firstName && (<div className='err'>{errors.firstName}</div>)}
            </div>
            <div className='row'>
                <input type='text' placeholder='Email' onChange={handleChange('email')} />
                {errors.email && (<div className='err'>{errors.email}</div>)}
            </div>
        </section>
        <textarea placeholder='Message' onChange={handleChange('message')} />
        {errors.message && (<div className='err last'>{errors.message}</div>)}
        <button onClick={handleSubmit}>Post Comment</button>
    </div>)
};

export default Blog;