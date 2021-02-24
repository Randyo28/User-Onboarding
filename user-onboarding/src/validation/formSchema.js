import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string()
        .trim()
        .required('Name is required, please fill out.')
        .min(3, 'Name must be 3 characters long'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required to proceed'),
    password: yup.string()
    .trim()
    .required('Password is required, please fill out.')
    .min(7, 'Password must be 7 characters long'),
    terms: yup.boolean(),
})

export default formSchema