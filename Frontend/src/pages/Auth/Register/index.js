import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import registerSchema from '../Register/validations';

const Register = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: registerSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography variant="h4" gutterBottom>
                    Kayıt Ol
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Ad"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="surname"
                        name="surname"
                        label="Soyad"
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.surname && Boolean(formik.errors.surname)}
                        helperText={formik.touched.surname && formik.errors.surname}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="userName"
                        name="userName"
                        label="Kullanıcı Adı"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.userName && Boolean(formik.errors.userName)}
                        helperText={formik.touched.userName && formik.errors.userName}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="E-posta"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Parola"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Parola Tekrarı"
                        type="password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        margin="normal"
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit" style={{ marginTop: '16px' }}>
                        Kayıt Ol
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Register;
