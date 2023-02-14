import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const ResetPassword = () => {

    const initialValues = {
        password: '',
        reEnterPassword: '',
    }

    const validationSchema = yup.object({
        password: yup.string().required('Please enter password'),
        reEnterPassword: yup.string().required('Please re enter password').oneOf([yup.ref('password'), null], 'Password does not matched'),
    })

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues,
        validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: () => {
            alert('Password changed');
        }
    });

    return (<div className='auth'>
        <h2>Reset Password</h2>
        <p>Please enter your new password</p>
        <input type='password' placeholder='New Password' onChange={handleChange('password')} />
        {errors.password && <div className='err'>{errors.password}</div>}
        <input type='password' placeholder='Re-enter Password' onChange={handleChange('reEnterPassword')} />
        {errors.reEnterPassword && <div className='err'>{errors.reEnterPassword}</div>}
        <button onClick={handleSubmit}>Update</button>
    </div>);
}

export default ResetPassword;