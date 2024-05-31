import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "../../config/axiosConfig"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext"
import toast from "react-hot-toast";
import * as yup from "yup"

const ClubForm = ({  userType }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [forClubType, setForClubType] = useState(2);
    const { user } = useContext(AuthContext)


    const handleFormSubmit = async (values) => {
        try {
            values.clubId = user.userId
            values.userType = userType
            // await axios.post(process.env.REACT_APP_BASE_URL + "api/auth/signup", values)
            toast.success("Account Created Successfully")
        }
        catch (err) {
            err.response ? toast.error(err.response.data.message) : toast.error("Failed")
        }
    };
    return (
        <Box m="20px">
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
                resetForm
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Email*"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.userEmail}
                                    name="userEmail"
                                    error={!!touched.userEmail && !!errors.userEmail}
                                    helperText={touched.userEmail && errors.userEmail}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="password"
                                    label="Password*"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.userPassword}
                                    name="userPassword"
                                    error={!!touched.userPassword && !!errors.userPassword}
                                    helperText={touched.userPassword && errors.userPassword}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="password"
                                    label="Confirm Password*"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.confirmPassword}
                                    name="confirmPassword"
                                    error={!!touched.confirmPassword && !!errors.confirmPassword}
                                    helperText={touched.confirmPassword && errors.confirmPassword}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Club Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.clubName}
                                    name="clubName"
                                    error={!!touched.clubName && !!errors.clubName}
                                    helperText={touched.clubName && errors.clubName}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Charter ID"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.charterId}
                                    name="charterId"
                                    error={!!touched.charterId && !!errors.charterId}
                                    helperText={touched.charterId && errors.charterId}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="date"
                                    label="Charter Date"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.charterDate}
                                    name="charterDate"
                                    error={!!touched.charterDate && !!errors.charterDate}
                                    helperText={touched.charterDate && errors.charterDate}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <FormControl fullWidth variant="filled"
                                    sx={{ gridColumn: "span 2" }}
                                >
                                    <InputLabel>Group</InputLabel>
                                    <Select
                                        value={values.groupId}
                                        onChange={handleChange}
                                        name="groupId"
                                        error={!!touched.groupId && !!errors.groupId}
                                        helperText={touched.groupId && errors.groupId}
                                    >
                                        <MenuItem value={1}>Group 1</MenuItem>
                                        <MenuItem value={2}>Group 2</MenuItem>
                                        <MenuItem value={3}>Group 3</MenuItem>
                                        <MenuItem value={4}>Group 4</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth variant="filled"
                                    sx={{ gridColumn: "span 2" }}
                                >
                                    <InputLabel>Club Type</InputLabel>
                                    <Select
                                        value={values.clubType}
                                        onChange={(event) => { handleChange(event); setForClubType(event.target.value) }}
                                        name="clubType"
                                        error={!!touched.clubType && !!errors.clubType}
                                        helperText={touched.clubType && errors.clubType}
                                    >
                                        <MenuItem value={1}>College</MenuItem>
                                        <MenuItem value={2}>Community</MenuItem>
                                    </Select>
                                </FormControl>
                                {/* <TextField
                                    fullWidth
                                    variant="filled"
                                    type="file"
                                    label="clubLogo"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.clubLogo}
                                    name=""
                                    error={!!touched.clubLogo && !!errors.clubLogo}
                                    helperText={touched.clubLogo && errors.clubLogo}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="Date"
                                    label="installationDate"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.installationDate}
                                    name="Installation Date"
                                    error={!!touched.installationDate && !!errors.installationDate}
                                    helperText={touched.installationDate && errors.installationDate}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="parentRotaryName"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.parentRotaryName}
                                    name="Parent Rotary Name"
                                    error={!!touched.parentRotaryName && !!errors.parentRotaryName}
                                    helperText={touched.parentRotaryName && errors.parentRotaryName}
                                    sx={{ gridColumn: "span 2" }}
                                />
                                {
                                    // only college will have staff coordinator
                                    forClubType == 1 ?
                                        <>
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="staffCoordinator"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.staffCoordinator}
                                                name="Staff Co-ordinator Name"
                                                error={!!touched.staffCoordinator && !!errors.staffCoordinator}
                                                helperText={touched.staffCoordinator && errors.staffCoordinator}
                                                sx={{ gridColumn: "span 2" }}
                                            />
                                            <TextField
                                                fullWidth
                                                variant="filled"
                                                type="text"
                                                label="staffCoordinatorNumber"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.staffCoordinatorNumber}
                                                name="Staff Co-ordinator Number"
                                                error={!!touched.staffCoordinatorNumber && !!errors.staffCoordinatorNumber}
                                                helperText={touched.staffCoordinatorNumber && errors.staffCoordinatorNumber}
                                                sx={{ gridColumn: "span 2" }}
                                            />
                                        </>
                                        : ""
                                } */}


                            </Box>
                            <Box display="flex" justifyContent="end" mt="20px">
                                <Button type="submit" color="secondary" variant="contained">
                                    Create New User
                                </Button>
                            </Box>
                        </form>
                    )
                }}
            </Formik>
        </Box>
    );
};


const checkoutSchema = yup.object().shape({
    clubName: yup.string().required("Full Name is required"),
    userEmail: yup.string().email("Invalid email").required("Email is required"),
    userPassword: yup.string().required("Password is required").min(8, "Atleast 8 characters required"),
    charterId:yup.string().required("Charter Id is required"),
    charterDate:yup.string().required("Charter Date is required"),
    groupId:yup.string().required("Select any group"),
    clubType:yup.string().required("Select Club Type"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('userPassword'), null], 'Passwords must match')
        .required("Confirm Password is required"),
});

const initialValues = {
    clubName: "",
    charterId: "",
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
    charterDate: "",
    groupId: "",
    clubType: "",
    clubLogo: "",
    installationDate: "",
    parentRotaryName: "",
    staffCoordinator: "",
    staffCoordinatorNumber: "",
};

export default ClubForm;