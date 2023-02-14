import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { authPage, showAuth } from '../../redux/slices';

const Login = () => {

    const dispatch = useDispatch();

    const initialValues = {
        username: '',
        password: '',
    }

    const validationSchema = yup.object({
        username: yup.string().required('Please enter username'),
        password: yup.string().required('Please enter password'),
    })

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues,
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: () => {
            alert('Logged in');
            localStorage.setItem('loggedin', 'true');
            dispatch(showAuth(false));
        }
    });

    return (<div className='auth'>
        <h2>Log in</h2>
        <p>Please enter your details</p>
        <input type='text' placeholder='Username' onChange={handleChange('username')} />
        {errors.username && (<div className='err'>{errors.username}</div>)}
        <input type='text' placeholder='Password' onChange={handleChange('password')} />
        {errors.password && (<div className='err'>{errors.password}</div>)}
        <span className='forgot' onClick={() => dispatch(authPage('forgotPassword'))}>Forgot Password?</span>
        <button onClick={handleSubmit}>Log in</button>
        <div className='bottom-text'>Don’t have an account ? <span onClick={() => dispatch(authPage('signup'))}>Sign up</span></div>
    </div>);
}

export default Login;