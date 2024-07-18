import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Geçerli bir e-posta adresi girin')
        .required('E-posta gerekli'),
    password: Yup.string()
        .required('Şifre gerekli'),
});

export default validationSchema;
