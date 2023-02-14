import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import icons from '../../constants/icons';

import ShippingLayout from '../../components/shippingLayout';

import '../../css/checkout.css';

const Checkout = () => {

    document.title = 'Checkout - keshroot';

    const navigate = useNavigate();
    const emailCheckBoxRef = useRef();

    const [contries, setContries] = useState([]);
    const [selectedContry, setSelectedContry] = useState('India');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedStates] = useState('Gujarat');

    const initialValues = {
        firstName: '',
        lastName: '',
        country: '',
        address: '',
        state: '',
        city: '',
        pinCode: '',
        email: '',
        phone: '',
    };

    const validationSchema = yup.object({
        firstName: yup.string().required('Please enter first name'),
        lastName: yup.string().required('Please enter last name'),
        country: yup.string().required('Please select your country'),
        address: yup.string().required('Please enter your address'),
        state: yup.string().required('Please select your state'),
        city: yup.string().required('Please enter your city'),
        pinCode: yup.string().required('Please enter your pincode').min(6, 'Please enter valid pincode').max(6, 'Please enter valid pincode').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Please enter valid pincode'),
        email: yup.string().email('Please enter valid email').required('Please enter your email'),
        phone: yup.string().required('Please enter your phone number').min(10, 'Please enter valid phone number').max(10, 'Please enter valid phone number').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Please enter valid phone number'),
    });

    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: () => {
            navigate('/shop/shipping');
        },
    });

    useEffect(() => {
        getContries();
        handleCheck();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        getStates();
    }, [selectedContry]);

    const getContries = async () => {
        const headers = {
            headers: {
                'X-CSCAPI-KEY':
                    'ek5ON1NSQnB2cFhUdnViaVpNUUNGTUhhTVhBVVJCSWlISHg2YUkwVw==',
            },
        };

        const { data } = await axios.get('https://api.countrystatecity.in/v1/countries/', headers);

        const result = [];
        data.forEach(item => {
            result.push({ value: item.name, code: item.iso2 });
        });
        setContries(result);
    };

    const headers = {
        headers: {
            'X-CSCAPI-KEY':
                'ek5ON1NSQnB2cFhUdnViaVpNUUNGTUhhTVhBVVJCSWlISHg2YUkwVw==',
        },
    };

    const getStates = async () => {

        const contryCode = contries.find(x => x.value === selectedContry) ? contries.find(x => x.value === selectedContry).code : 'IN';

        const { data } = await axios.get('https://api.countrystatecity.in/v1/countries/' + contryCode + '/states', headers);

        const result = [];
        data.forEach(item => {
            result.push({ value: item.name });
        });
        setStates(result);
    };

    const handleCheck = () => {
        if (emailCheckBoxRef.current.checked == true) {
            emailCheckBoxRef.current.checked = false;
        } else {
            emailCheckBoxRef.current.checked = true;
        }
    }

    return (<ShippingLayout className='checkout'>
        <h2>Contact Information</h2>
        <div className='row'>
            <div className='col'>
                <input type='text' placeholder='Email' onChange={handleChange('email')} />
                {errors.email && <div className='err'>{errors.email}</div>}
            </div>
            <div className='col'>
                <input type='text' placeholder='Phone' onChange={handleChange('phone')} />
                {errors.phone && <div className='err'>{errors.phone}</div>}
            </div>
        </div>
        <div className='check-box' onClick={handleCheck}>
            <input type='checkbox' id='check-box' ref={emailCheckBoxRef} />
            <label for='check-box'>Email me with news and offers</label>
        </div>
        <h2 id='sipping-address'>Shipping address</h2>
        <select id='contry' onChange={handleChange('country')}>
            <option>Country/Region</option>
            {contries.map(item => (
                <option>{item.value}</option>
            ))}
        </select>
        {errors.country && <div className='err'>{errors.country}</div>}
        <div className='row' style={{ marginTop: 20 }}>
            <div className='col'>
                <input type='text' placeholder='First Name' onChange={handleChange('firstName')} />
                {errors.firstName && <div className='err'>{errors.firstName}</div>}
            </div>
            <div className='col'>
                <input type='text' placeholder='Last Name' onChange={handleChange('lastName')} />
                {errors.lastName && <div className='err'>{errors.lastName}</div>}
            </div>
        </div>
        <input type='text' placeholder='Address' id='address' onChange={handleChange('address')} />
        {errors.address && <div className='err'>{errors.address}</div>}
        <div className='row last' style={{ marginTop: 20 }}>
            <div className='col'>
                <select id='state' onChange={handleChange('state')}>
                    <option>State</option>
                    {states.map(item => (
                        <option>{item.value}</option>
                    ))}
                </select>
                {errors.state && <div className='err'>{errors.state}</div>}
            </div>
            <div className='col'>
                <input type='text' placeholder='City' onChange={handleChange('city')} />
                {errors.city && <div className='err'>{errors.city}</div>}
            </div>
            <div className='col'>
                <input type='text' placeholder='Pin code' onChange={handleChange('pinCode')} />
                {errors.pinCode && <div className='err'>{errors.pinCode}</div>}
            </div>
        </div>
        <div className='bootom-check'>
            <div className='check-box'>
                <input type='checkbox' id='save' />
                <label for='save'>Save this information for next time</label>
            </div>
            <div className='check-box' style={{ marginTop: 5 }}>
                <input type='checkbox' id='text' />
                <label for='text'>Text me with news and offers</label>
            </div>
        </div>
        <div className='btn-section'>
            <div className='back' onClick={() => navigate('/shop/cart')}>
                <img src={icons.leftArrow} />
                <span>Return to cart</span>
            </div>
            <button onClick={handleSubmit}>Continue to Shipping</button>
        </div>
    </ShippingLayout>);
}

export default Checkout;