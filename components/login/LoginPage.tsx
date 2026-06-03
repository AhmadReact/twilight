'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { brandColors, grayColors, loginFieldSx } from '@/lib/theme';
import LoginBackgroundPattern from '@/components/login/LoginBackgroundPattern';

const validationSchema = Yup.object({
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  rememberMe: Yup.boolean(),
});

const initialValues = {
  email: '',
  password: '',
  rememberMe: false,
};

export default function LoginPage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center h-full overflow-hidden bg-white px-8 py-6 sm:py-8">
      <div className="relative z-1 flex w-full max-w-[1280px] flex-col items-center px-8 max-h-full">
        <div className="flex w-full max-w-[360px] flex-col items-center gap-8">
          <div className="relative flex w-full flex-col items-center gap-[74px]">
            <div className="relative flex items-center justify-center w-full h-[75px] overflow-visible">
              <LoginBackgroundPattern />
              <Image
                src="/login/logo.svg"
                alt="Logo"
                width={104}
                height={75}
                priority
                className="relative z-1 w-[103.999px] h-[74.749px]"
              />
            </div>

            <div className="relative z-1 flex w-full flex-col items-start gap-3 text-center">
              <h1 className="w-full text-[30px] font-semibold leading-[38px] text-[#101828]">
                Super Admin Log in
              </h1>
              <p className="w-full text-base font-normal leading-6 text-[#475467]">
                Welcome back! Please enter your details.
              </p>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // TODO: call auth API
              console.log(values);
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
              <Form className="flex w-full flex-col gap-6">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium leading-5 text-[#344054]">
                      Email
                    </label>
                    <TextField
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      fullWidth
                      hiddenLabel
                      sx={loginFieldSx}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="password"
                      className="text-sm font-medium leading-5 text-[#344054]"
                    >
                      Password
                    </label>
                    <TextField
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      fullWidth
                      hiddenLabel
                      sx={loginFieldSx}
                    />
                  </div>
                </div>

                <div className="flex items-center w-full">
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="rememberMe"
                        checked={values.rememberMe}
                        onChange={handleChange}
                        disableRipple
                        icon={
                          <span className="block w-4 h-4 rounded border border-[#D0D5DD] bg-white" />
                        }
                        checkedIcon={
                          <span className="flex items-center justify-center w-4 h-4 rounded border border-[#9643E8] bg-[#9643E8] text-white text-xs leading-none">
                            ✓
                          </span>
                        }
                        sx={{
                          p: 0,
                          mr: '8px',
                          alignSelf: 'flex-start',
                          mt: '2px',
                        }}
                      />
                    }
                    label="Remember for 30 days"
                    sx={{
                      flex: 1,
                      m: 0,
                      alignItems: 'flex-start',
                      '& .MuiFormControlLabel-label': {
                        fontSize: '14px',
                        fontWeight: 500,
                        lineHeight: '20px',
                        color: grayColors[700],
                      },
                    }}
                  />

                  <Button
                    component={Link}
                    href="/forgot-password"
                    disableRipple
                    sx={{
                      minWidth: 'auto',
                      p: 0,
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '20px',
                      color: brandColors[700],
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: brandColors[600],
                      },
                    }}
                  >
                    Forgot password
                  </Button>
                </div>

                <Button
                  type="submit"
                  fullWidth
                  disabled={isSubmitting}
                  disableElevation
                  sx={{
                    borderRadius: '1000px',
                    border: `1px solid ${brandColors[300]}`,
                    backgroundImage:
                      'linear-gradient(184.75deg, rgb(195, 134, 255) 5.31%, rgb(150, 67, 232) 87.07%)',
                    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                    px: '16px',
                    py: '10px',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '24px',
                    color: '#FFFFFF',
                    '&:hover': {
                      backgroundImage:
                        'linear-gradient(184.75deg, rgb(183, 110, 255) 5.31%, rgb(117, 53, 181) 87.07%)',
                    },
                  }}
                >
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
}
