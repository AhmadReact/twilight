'use client';

import { useMemo, useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useCreateUserMutation } from '@/app/admin/users/store/userAPI';
import AdminFormDialog from '@/components/admin/shared/AdminFormDialog';
import AdminLabeledField from '@/components/admin/shared/AdminLabeledField';
import { adminPillFieldSx } from '@/lib/admin/adminFieldStyles';
import { useAppDispatch } from '@/lib/store/hooks';
import { showNotification } from '@/lib/store/slices/notificationSlice';
import { brandColors, grayColors } from '@/lib/theme';

const countryCodes = [
  { value: '+1', label: '+1', flag: '🇺🇸' },
  { value: '+44', label: '+44', flag: '🇬🇧' },
  { value: '+92', label: '+92', flag: '🇵🇰' },
];

const userRoleOptions = [
  { value: 'buyer', label: 'Buyer' },
  { value: 'pro_seller', label: 'Pro Seller' },
] as const;

type UserRoleValue = (typeof userRoleOptions)[number]['value'];

type NewUserFormValues = {
  full_name: string;
  email: string;
  countryCode: string;
  phone: string;
  password: string;
  user_role: UserRoleValue;
};

const initialValues: NewUserFormValues = {
  full_name: '',
  email: '',
  countryCode: '+1',
  phone: '',
  password: '',
  user_role: 'buyer',
};

const validationSchema = Yup.object({
  full_name: Yup.string().trim().required('Full name is required'),
  email: Yup.string().trim().email('Enter a valid email').required('Email is required'),
  countryCode: Yup.string().required('Country code is required'),
  phone: Yup.string().trim().required('Phone number is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  user_role: Yup.mixed<UserRoleValue>()
    .oneOf(['buyer', 'pro_seller'])
    .required('User role is required'),
});

type NewUserDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function NewUserDialog({ open, onClose }: NewUserDialogProps) {
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [createUser, { isLoading: isSubmitting }] = useCreateUserMutation();

  const selectSx = useMemo(
    () => ({
      ...adminPillFieldSx,
      '& .MuiOutlinedInput-root': {
        ...adminPillFieldSx['& .MuiOutlinedInput-root'],
        height: 48,
      },
      '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
        py: '12px',
        px: '16px',
        color: grayColors[900],
      },
    }),
    [],
  );

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  return (
    <AdminFormDialog open={open} onClose={handleClose} title="Add a new User">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const payload = {
            full_name: values.full_name.trim(),
            email: values.email.trim(),
            phone_country_code: values.countryCode,
            phone_number: values.phone.trim(),
            password: values.password,
            role: values.user_role,
          };

          try {
            const response = await createUser(payload).unwrap();

            dispatch(
              showNotification({
                message: response.message || 'User created successfully',
                severity: 'success',
              }),
            );

            resetForm();
            setShowPassword(false);
            onClose();
          } catch {
            // Error notification is handled by the axios interceptor.
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
          <Form className="flex flex-col gap-3">
            <AdminLabeledField label="Full name" htmlFor="full_name">
              <TextField
                id="full_name"
                name="full_name"
                placeholder="Olivia Rhyne"
                fullWidth
                value={values.full_name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.full_name && Boolean(errors.full_name)}
                helperText={touched.full_name && errors.full_name}
                sx={adminPillFieldSx}
                slotProps={{
                  input: {
                    sx: { height: 48, px: '16px' },
                  },
                }}
              />
            </AdminLabeledField>

            <AdminLabeledField label="Email" htmlFor="email">
              <TextField
                id="email"
                name="email"
                type="email"
                placeholder="oliviarhyne@email.com"
                fullWidth
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={adminPillFieldSx}
                slotProps={{
                  input: {
                    sx: { height: 48, px: '20px' },
                  },
                }}
              />
            </AdminLabeledField>

            <AdminLabeledField label="Phone number" htmlFor="phone">
              <div className="flex h-12 w-full items-center overflow-hidden rounded-full border border-[#E3E5E5] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <Select
                  name="countryCode"
                  value={values.countryCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  variant="standard"
                  disableUnderline
                  IconComponent={KeyboardArrowDownOutlinedIcon}
                  sx={{
                    minWidth: 108,
                    pl: 2,
                    '& .MuiSelect-select': {
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      py: 0,
                      pr: '28px !important',
                      fontSize: '16px',
                      color: '#090A0A',
                    },
                    '& .MuiSelect-icon': {
                      color: grayColors[500],
                      right: 8,
                    },
                  }}
                  renderValue={(selected) => {
                    const option = countryCodes.find((item) => item.value === selected);

                    return (
                      <span className="inline-flex items-center gap-1 text-base text-[#090A0A]">
                        <span aria-hidden>{option?.flag}</span>
                        {option?.label ?? selected}
                      </span>
                    );
                  }}
                >
                  {countryCodes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <span className="inline-flex items-center gap-2">
                        <span aria-hidden>{option.flag}</span>
                        {option.label}
                      </span>
                    </MenuItem>
                  ))}
                </Select>
                <div className="h-6 w-px bg-[#E3E5E5]" />
                <TextField
                  id="phone"
                  name="phone"
                  placeholder="Type here"
                  fullWidth
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  variant="standard"
                  slotProps={{
                    input: {
                      disableUnderline: true,
                      sx: {
                        px: 2,
                        fontSize: '16px',
                        color: grayColors[900],
                        '&::placeholder': {
                          color: '#98A2B3',
                          opacity: 1,
                        },
                      },
                    },
                  }}
                />
              </div>
              {touched.phone && errors.phone ? (
                <p className="text-xs text-[#F04438]">{errors.phone}</p>
              ) : null}
            </AdminLabeledField>

            <AdminLabeledField label="Password" htmlFor="password">
              <TextField
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                fullWidth
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={adminPillFieldSx}
                slotProps={{
                  input: {
                    sx: { height: 48, px: '16px' },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                          edge="end"
                          onClick={() => setShowPassword((current) => !current)}
                          sx={{ color: grayColors[500] }}
                        >
                          {showPassword ? (
                            <VisibilityOutlinedIcon fontSize="small" />
                          ) : (
                            <VisibilityOffOutlinedIcon fontSize="small" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </AdminLabeledField>

            <AdminLabeledField label="User Role" htmlFor="user_role">
              <Select
                id="user_role"
                name="user_role"
                value={values.user_role}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                displayEmpty
                IconComponent={KeyboardArrowDownOutlinedIcon}
                sx={selectSx}
              >
                {userRoleOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {touched.user_role && errors.user_role ? (
                <p className="text-xs text-[#F04438]">{errors.user_role}</p>
              ) : null}
            </AdminLabeledField>

            <Button
              type="submit"
              fullWidth
              disableElevation
              disabled={isSubmitting || !dirty || !isValid}
              sx={{
                mt: 1,
                borderRadius: '1000px',
                border: `1px solid ${brandColors[300]}`,
                backgroundImage:
                  'linear-gradient(182.66deg, rgb(195, 134, 255) 5.31%, rgb(150, 67, 232) 87.07%)',
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                py: 2,
                px: 3,
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                color: '#FFFFFF',
                textTransform: 'none',
                '&:hover': {
                  backgroundImage:
                    'linear-gradient(182.66deg, rgb(183, 110, 255) 5.31%, rgb(117, 53, 181) 87.07%)',
                },
                '&.Mui-disabled': {
                  color: '#FFFFFF',
                  opacity: 0.7,
                },
              }}
            >
              {isSubmitting ? (
                <CircularProgress size={22} sx={{ color: '#FFFFFF' }} />
              ) : (
                'Create User'
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </AdminFormDialog>
  );
}
