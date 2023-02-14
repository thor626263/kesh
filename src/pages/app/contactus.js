import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import images from '../../constants/images';
import icons from '../../constants/icons';

import Footer from '../../components/footer';
import Header from '../../components/header';

import '../../css/contactus.css';

const ContactUs = () => {

    document.title = 'Contact us - keshroot';

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
    };

    const validationSchema = yup.object({
        firstName: yup.string().required('Please enter your first name'),
        lastName: yup.string().required('Please enter your last name'),
        email: yup.string().email('Please enter valid email').required('Please enter your email'),
        phoneNumber: yup.string().required('Please enter your phone number').min(10, 'Please enter valid phone number').max(10, 'Please enter valid phone number').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Please enter valid phone number'),
        subject: yup.string().required('Please enter subject'),
        message: yup.string().required('Please enter message').min(10, 'Message is too short'),
    })

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues,
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: () => alert('Form submitted'),
    });

    return (<div>
        <Header activepage='contact-us' />
        <div className='container-section'>
            <section id='form'>
                <h2>Contact us</h2>
                <p>Get in touch and let us know how we can help. Have a question but aren’t sure who to contact? Get in touch and a member of our team will reach out to you.</p>
                <div className='form'>
                    <div className='form-section'>
                        <div className='row'>
                            <input type='text' placeholder='First name' onChange={handleChange('firstName')} />
                            {errors.firstName && (<div className='err'>{errors.firstName}</div>)}
                        </div>
                        <div className='row'>
                            <input type='text' placeholder='Last name' onChange={handleChange('lastName')} />
                            {errors.lastName && (<div className='err'>{errors.lastName}</div>)}
                        </div>
                    </div>
                    <div className='form-section'>
                        <div className='row'>
                            <input type='email' placeholder='Email' onChange={handleChange('email')} />
                            {errors.email && (<div className='err'>{errors.email}</div>)}
                        </div>
                        <div className='row'>
                            <input type='text' placeholder='Phone number' onChange={handleChange('phoneNumber')} />
                            {errors.phoneNumber && (<div className='err'>{errors.phoneNumber}</div>)}
                        </div>
                    </div>
                    <div className='form-section'>
                        <div className='row'>
                            <input type='text' placeholder='Subject' onChange={handleChange('subject')} />
                            {errors.subject && (<div className='err'>{errors.subject}</div>)}
                        </div>
                    </div>
                    <div className='form-section'>
                        <div className='row'>
                            <textarea placeholder='Message' onChange={handleChange('message')} />
                            {errors.message && (<div className='err'>{errors.message}</div>)}
                        </div>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </section>
            <section id='info'>
                <img id='logo' src={images.logo} />
                <h3>Address:</h3>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <h3>Phone:</h3>
                <a href='tel:2015550124'><p>(201) 555-0124</p></a>
                <h3>Email</h3>
                <a href='mailto:kenzi.lawson@example.com'><p>kenzi.lawson@example.com</p></a>
                <div className='social'>
                    <h3>Stay connected</h3>
                    <main>
                        <a href='#' target='_blank'><img src={icons.facebookBlack} /></a>
                        <a href='#' target='_blank'><img src={icons.instagramBlack} /></a>
                        <a href='#' target='_blank'><img src={icons.twitterFullBlack} /></a>
                    </main>
                </div>
            </section>
        </div>
        <Footer />
    </div>);
}

export default ContactUs;