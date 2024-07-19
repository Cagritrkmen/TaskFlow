import * as Yup from 'yup';

const validationSchema = Yup.object({
    userName: Yup.string()
        .min(4, 'Kullanıcı adı en az 4 karakter olmalıdır')
        .required('Kullanıcı adı gerekli'),
    email: Yup.string()
        .email('Geçerli bir e-posta adresi girin')
        .required('E-posta gerekli'),
    password: Yup.string()
        .required('Şifre gerekli'),
});

export default validationSchema;
