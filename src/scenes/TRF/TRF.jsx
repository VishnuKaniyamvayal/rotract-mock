import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Container, Typography, Grid, InputLabel, FormControl } from '@mui/material';

const TRF = () => {
  const formik = useFormik({
    initialValues: {
      date: '',
      name: '',
      amount: '',
      document: null,
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required'),
      name: Yup.string().required('Name is required'),
      amount: Yup.number().required('Amount is required').positive('Must be a positive number'),
      document: Yup.mixed().required('Document is required').nullable(),
    }),
    onSubmit: values => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          TRF Form
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="date"
                name="date"
                label="Date"
                type="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="amount"
                name="amount"
                label="Amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel shrink htmlFor="document">Document</InputLabel>
                <input
                  id="document"
                  name="document"
                  type="file"
                  onChange={(event) => {
                    formik.setFieldValue("document", event.currentTarget.files[0]);
                  }}
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  style={{ display: 'block', marginTop: '16px' }}
                />
                {formik.touched.document && formik.errors.document ? (
                  <Typography color="error" variant="body2">{formik.errors.document}</Typography>
                ) : null}
              </FormControl>
            </Grid>
          </Grid>
          <Button color="primary" variant="contained" fullWidth type="submit" sx={{ mt: 3 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TRF;