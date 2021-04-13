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
