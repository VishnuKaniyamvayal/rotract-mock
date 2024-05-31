import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Container, Typography, Grid, InputLabel, FormControl } from '@mui/material';

const Grievance = () => {
  const formik = useFormik({
    initialValues: {
      grievanceName: '',
      details: '',
      file: null,
    },
    validationSchema: Yup.object({
      grievanceName: Yup.string().required('Grievance name is required'),
      details: Yup.string().required('Details are required'),
      file: Yup.mixed().required('File is required').nullable(),
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
          Grievance Form
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="grievanceName"
                name="grievanceName"
                label="Grievance Name"
                value={formik.values.grievanceName}
                onChange={formik.handleChange}
                error={formik.touched.grievanceName && Boolean(formik.errors.grievanceName)}
                helperText={formik.touched.grievanceName && formik.errors.grievanceName}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="details"
                name="details"
                label="Details"
                multiline
                rows={4}
                value={formik.values.details}
                onChange={formik.handleChange}
                error={formik.touched.details && Boolean(formik.errors.details)}
                helperText={formik.touched.details && formik.errors.details}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel shrink htmlFor="file">File</InputLabel>
                <input
                  id="file"
                  name="file"
                  type="file"
                  onChange={(event) => {
                    formik.setFieldValue("file", event.currentTarget.files[0]);
                  }}
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  style={{ display: 'block', marginTop: '16px' }}
                />
                {formik.touched.file && formik.errors.file ? (
                  <Typography color="error" variant="body2">{formik.errors.file}</Typography>
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

export default Grievance;
