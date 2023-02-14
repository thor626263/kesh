import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { authPage } from '../../redux/slices';

const Signup = () => {

    const dispatch = useDispatch();

    const initialValues = {
        username: '',
        password: '',
        emailID: '',
    }

    const validationSchema = yup.object({
        username: yup.string().required('Please enter username'),
        password: yup.string().required('Please enter password').min(6, 'Please Enter At Least 6 Characters'),
        emailID: yup.string().email('Please enter valid Email ID').required('Please enter Email ID'),
    })

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues,
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: () => {
            alert('Logged in');
        }
    });

    return (<div className='auth'>
        <h2>Sign up</h2>
        <p>Please enter your details</p>
        <input type='text' placeholder='Username' onChange={handleChange('username')} />
        {errors.username && (<div className='err'>{errors.username}</div>)}
        <input type='text' placeholder='Password' onChange={handleChange('password')} />
        {errors.password && (<div className='err'>{errors.password}</div>)}
        <input type='text' placeholder='Email ID' onChange={handleChange('emailID')} />
        {errors.emailID && (<div className='err'>{errors.emailID}</div>)}
        {/* <span className='forgot'>Forgot Password?</span> */}
        <button onClick={handleSubmit}>Sign up</button>
        <div className='bottom-text'>Already have an account ? <span onClick={() => dispatch(authPage('login'))}>Log in</span></div>
    </div>);
}

export default Signup;