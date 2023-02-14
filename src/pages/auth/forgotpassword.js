import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { authPage } from '../../redux/slices';

const ForgotPassword = () => {

    const dispatch = useDispatch();

    const initialValues = {
        emailID: '',
    }

    const validationSchema = yup.object({
        emailID: yup.string().email('Please enter valid Email ID').required('Please enter Email ID'),
    })

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues,
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: () => {
            dispatch(authPage('resetPassword'));
        }
    });

    return (<div className='auth'>
        <h2>Forgot Password</h2>
        <p> Please enter your mail id</p>
        <input type='text' placeholder='Email id' onChange={handleChange('emailID')} />
        {errors.emailID && (<div className='err'>{errors.emailID}</div>)}
        <button onClick={handleSubmit}>Submit</button>
    </div>);
}

export default ForgotPassword;