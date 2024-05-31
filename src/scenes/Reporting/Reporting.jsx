import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Container, Typography, Grid, FormControl, InputLabel, Select } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { AuthContext } from '../../context/AuthContext';
import { MenuItem } from 'react-pro-sidebar';
import toast from 'react-hot-toast';

const Reporting = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { user } = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            report_id: '',
            report_name: '',
            description: '',
            no_of_rotarians_attended: '',
            no_of_rotaractors: '',
            visiting_rotaractor_attendance: '',
            guest_attended: '',
            photographs: '',
            avenue: '',
            beneficiaries_count: '',
            report_type: '',
            month: ''
        },
        validationSchema: Yup.object({
            report_id: Yup.string().required('Report ID is required'),
            report_name: Yup.string().required('Report name is required'),
            description: Yup.string().required('Description is required'),
            no_of_rotarians_attended: Yup.number().required('Number of Rotarians attended is required').positive('Must be a positive number'),
            no_of_rotaractors: Yup.number().required('Number of Rotaractors is required').positive('Must be a positive number'),
            visiting_rotaractor_attendance: Yup.number().required('Visiting Rotaractor attendance is required').positive('Must be a positive number'),
            guest_attended: Yup.number().required('Number of guests attended is required').positive('Must be a positive number'),
            photographs: Yup.string().required('Photographs are required'),
            avenue: Yup.string().required('Avenue is required'),
            beneficiaries_count: Yup.number().required('Beneficiaries count is required').positive('Must be a positive number'),
            report_type: Yup.string().required('Report type is required'),
            month: Yup.string().required('Month is required')
        }),
        onSubmit: values => {
            // Handle form submission
            console.log(values);
            toast.success('Report submitted successfully!');
        }
    });

    return (
        <Container component="main" maxWidth="md">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    {user.userType == 3 ? "Club" : "Cabinet"} Monthly Report
                </Typography>
                <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="report_name"
                                name="report_name"
                                label="Report Name"
                                value={formik.values.report_name}
                                onChange={formik.handleChange}
                                error={formik.touched.report_name && Boolean(formik.errors.report_name)}
                                helperText={formik.touched.report_name && formik.errors.report_name}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="description"
                                name="description"
                                label="Description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="no_of_rotarians_attended"
                                name="no_of_rotarians_attended"
                                label="No of Rotarians Attended"
                                type="number"
                                value={formik.values.no_of_rotarians_attended}
                                onChange={formik.handleChange}
                                error={formik.touched.no_of_rotarians_attended && Boolean(formik.errors.no_of_rotarians_attended)}
                                helperText={formik.touched.no_of_rotarians_attended && formik.errors.no_of_rotarians_attended}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="no_of_rotaractors"
                                name="no_of_rotaractors"
                                label="No of Rotaractors"
                                type="number"
                                value={formik.values.no_of_rotaractors}
                                onChange={formik.handleChange}
                                error={formik.touched.no_of_rotaractors && Boolean(formik.errors.no_of_rotaractors)}
                                helperText={formik.touched.no_of_rotaractors && formik.errors.no_of_rotaractors}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="visiting_rotaractor_attendance"
                                name="visiting_rotaractor_attendance"
                                label="Visiting Rotaractor Attendance"
                                type="number"
                                value={formik.values.visiting_rotaractor_attendance}
                                onChange={formik.handleChange}
                                error={formik.touched.visiting_rotaractor_attendance && Boolean(formik.errors.visiting_rotaractor_attendance)}
                                helperText={formik.touched.visiting_rotaractor_attendance && formik.errors.visiting_rotaractor_attendance}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="guest_attended"
                                name="guest_attended"
                                label="Guest Attended"
                                type="number"
                                value={formik.values.guest_attended}
                                onChange={formik.handleChange}
                                error={formik.touched.guest_attended && Boolean(formik.errors.guest_attended)}
                                helperText={formik.touched.guest_attended && formik.errors.guest_attended}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="photographs"
                                name="photographs"
                                type='file'
                                label="Photographs"
                                value={formik.values.photographs}
                                onChange={formik.handleChange}
                                error={formik.touched.photographs && Boolean(formik.errors.photographs)}
                                helperText={formik.touched.photographs && formik.errors.photographs}
                                margin="normal"
                            />
                        </Grid>
                        {
                            user.userType == 3 ?
                            <Grid item xs={12} sm={6}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="avenue-label">Avenue</InputLabel>
                                <Select
                                    labelId="avenue-label"
                                    id="avenue"
                                    name="avenue"
                                    value={formik.values.avenue}
                                    onChange={formik.handleChange}
                                    error={formik.touched.avenue && Boolean(formik.errors.avenue)}
                                >
                                    <MenuItem value="">Community</MenuItem>
                                    <MenuItem value="">Professional</MenuItem>
                                    <MenuItem value="">International</MenuItem>
                                    <MenuItem value="District ">District Priorities</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        :
                        <TextField
                        fullWidth
                        id="photographs"
                        name="photographs"
                        type='text'
                        label="Venue"
                        value={formik.values.photographs}
                        onChange={formik.handleChange}
                        error={formik.touched.photographs && Boolean(formik.errors.photographs)}
                        helperText={formik.touched.photographs && formik.errors.photographs}
                        margin="normal"
                    />
                        }
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                id="beneficiaries_count"
                                name="beneficiaries_count"
                                label="Beneficiaries Count"
                                type="number"
                                value={formik.values.beneficiaries_count}
                                onChange={formik.handleChange}
                                error={formik.touched.beneficiaries_count && Boolean(formik.errors.beneficiaries_count)}
                                helperText={formik.touched.beneficiaries_count && formik.errors.beneficiaries_count}
                                margin="normal"
                            />
                        </Grid>
                        {  
                            user.userType == 3 ?
                            <Grid item xs={12} sm={6}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="report_type-label">Report Type</InputLabel>
                                <Select
                                    labelId="report_type-label"
                                    id="report_type"
                                    name="report_type"
                                    value={formik.values.report_type}
                                    onChange={formik.handleChange}
                                    error={formik.touched.report_type && Boolean(formik.errors.report_type)}
                                    >
                                    <MenuItem value="Project">Project</MenuItem>
                                    <MenuItem value="Initiative">Initiative</MenuItem>
                                    <MenuItem value="Meeting">Meeting</MenuItem>
                                    <MenuItem value="Participation">Participation</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                        :
                        <Grid item xs={12} sm={6}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="report_type-label">Report Type</InputLabel>
                            <Select
                                labelId="report_type-label"
                                id="report_type"
                                name="report_type"
                                value={formik.values.report_type}
                                onChange={formik.handleChange}
                                error={formik.touched.report_type && Boolean(formik.errors.report_type)}
                                >
                                <MenuItem value="Project">Event</MenuItem>
                                <MenuItem value="Initiative">Project Initiative</MenuItem>
                                <MenuItem value="Meeting">Meeting</MenuItem>
                                <MenuItem value="Participation">Participation</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        }
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="report_type-month">Report Month</InputLabel>
                                <Select
                                    labelId="report_type-month"
                                    id="month"
                                    name="month"
                                    value={formik.values.month}
                                    onChange={formik.handleChange}
                                    error={formik.touched.month && Boolean(formik.errors.month)}
                                >
                                    <MenuItem value="1">January</MenuItem>
                                    <MenuItem value="2">February</MenuItem>
                                    <MenuItem value="3">March</MenuItem>
                                    <MenuItem value="4">April</MenuItem>
                                    <MenuItem value="5">May</MenuItem>
                                    <MenuItem value="6">June</MenuItem>
                                    <MenuItem value="7">July</MenuItem>
                                    <MenuItem value="8">August</MenuItem>
                                    <MenuItem value="9">September</MenuItem>
                                    <MenuItem value="10">October</MenuItem>
                                    <MenuItem value="11">November</MenuItem>
                                    <MenuItem value="12">December</MenuItem>
                                </Select>
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

export default Reporting;
