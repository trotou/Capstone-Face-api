import * as yup from 'yup';

const requiredField = 'Campo obrigatório';

// --------------------------------------------------
export const userRegisterSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required(requiredField),

    password: yup.string().required(requiredField),
    name: yup.string().required(requiredField)
});

export const userLoginSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required(requiredField),

    password: yup.string().required(requiredField)
});

export const userVideoAddSchema = yup.object().shape({
    title: yup.string().max(24, 'Max of 24 characters').required('campo obrigatório'),
    date: yup.date().required('campo obrigatório')
});

export const userImgAddSchema = yup.object().shape({
    title: yup.string().max(24, 'Max of 24 characters').required('campo obrigatório'),
    date: yup.date().required('campo obrigatório')
});
