import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Geçerli bir e-posta adresi girin')
        .required('E-posta gerekli'),
    password: Yup.string()
        .min(8, 'Parola en az 8 karakter olmalıdır')
        .required('Parola gerekli'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Parolalar eşleşmiyor')
        .required('Parola tekrarı gerekli'),
});

export default validationSchema;