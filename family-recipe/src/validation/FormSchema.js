import * as yup from 'yup'


const formSchema = yup.object().shape({
    title: yup.string()
        .trim()
        .required('Title is required')
        .min(3, 'must be at least three characters long'),
    source: yup.string()
        .trim(),
    ingredients: yup.string()
        .trim()
        .required('Please include all ingredients and measurements ')
        .min(10,'must be 10 characters long.'),
    instructions: yup.string()
        .trim()
        .required('Please add yo instructions')
        .min(10,'must be 10 characters long.'),
    category: yup.string()
        .trim()
        .required('Please include catagory')
        .min(5,'must be 5 characters long.'),

})

export default formSchema