import * as yup from 'yup'


const formSchema = yup.object().shape({
    title: yup.string()
        .trim()
        .required('Title is required')
        .min(2, 'must be at least three characters long'),
    source: yup.string()
        .trim(),
    ingredients: yup.string()
        .trim()
        .required('Please include all ingredients and measurements ')
        .min(2,'must be 4 characters long.'),
    instructions: yup.string()
        .trim()
        .required('Please add yo instructions')
        .min(2,'must be 4 characters long.'),
    appitizer: yup.boolean(),
    savory: yup.boolean(),
    desert: yup.boolean(),
    bakesgoods: yup.boolean(),
    pizza: yup.boolean(),

})

export default formSchema