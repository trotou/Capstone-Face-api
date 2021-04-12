import * as yup from 'yup';

const requiredField = 'Campo obrigatório';

// --------------------------------------------------
export const userRegisterSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required(requiredField),

    password: yup
        .string()
        .min(8, 'Mínimo de 8 dígitos')

        .matches(
            /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Senha Incorreta'
        )
        .required(requiredField),
    name: yup.string().required(requiredField)
});

export const userLoginSchema = yup.object().shape({
    email: yup.string().email('Email inválido').required(requiredField),

    password: yup.string().required(requiredField)
});
