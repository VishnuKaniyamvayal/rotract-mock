import React, { useState } from 'react'
import { Box, Button, Link, Modal, TextField, } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit, Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import *  as Yup from "yup" 
import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';


const ViewUsers = () => {
const [open, setOpen] = useState(false);
const [currentRow, setCurrentRow] = useState(null);
const [mockData,setMockData] = useState([
  {
    id: 1,
    userName: "John Doe",
    userEmail: "johndoe@example.com",
    riId: "RI12345",
    clubDesignation: "President",
    bloodGroup: "A+",
    userMobile: "1234567890",
    yearOfRotraction: 5,
    address: "123 Main St, Springfield",
    instaHandle: "https://instagram.com/johndoe",
    linkedinHandle: "https://linkedin.com/in/johndoe",
    facebookHandle: "https://facebook.com/johndoe"
  },
  {
    id: 2,
    userName: "Jane Smith",
    userEmail: "janesmith@example.com",
    riId: "RI67890",
    clubDesignation: "Secretary",
    bloodGroup: "B+",
    userMobile: "0987654321",
    yearOfRotraction: 3,
    address: "456 Elm St, Springfield",
    instaHandle: "https://instagram.com/janesmith",
    linkedinHandle: "https://linkedin.com/in/janesmith",
    facebookHandle: "https://facebook.com/janesmith"
  },
  {
    id: 3,
    userName: "JAMES",
    userEmail: "janes@example.com",
    riId: "RI67892",
    clubDesignation: "Secretary",
    bloodGroup: "B+",
    userMobile: "0987654312",
    yearOfRotraction: 3,
    address: "456 , London",
    instaHandle: "https://instagram.com/janesmith",
    linkedinHandle: "https://linkedin.com/in/janesmith",
    facebookHandle: "https://facebook.com/janesmith"
  }
])
   const handleOpen = (row) => {
    setCurrentRow(row);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Name is required'),
    riId: Yup.string().required('RI ID is required'),
    yearOfRotraction: Yup.number().required('Years of Rotraction is required').min(0, 'Years of Rotraction must be a positive number')
  });
  

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "userName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "userEmail",
      headerName: "Email",
      type: "text",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "riId",
      headerName: "RI ID",
      flex: 1,
    },
    {
      field: "Designation",
      headerName: "Club Designation",
      flex: 1,
      renderCell: ({ row: { clubDesignation } }) => {
        if (!clubDesignation) {
          return ("Nil")
        }
        else {
          return (clubDesignation)
        }
      }
    },
    {
      field: "bloodGroup",
      headerName: "Blood Group",
      flex: 1,
    },
    {
      field: "userMobile",
      headerName: "Mobile Number",
      flex: 1,
    },
    {
      field: "yearOfRotraction",
      headerName: "Years of Rotraction",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "instaHandle",
      headerName: "Links",
      flex: 1,
      renderCell: ({ row: { instaHandle, linkedinHandle, facebookHandle } }) => {
        return (
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={2}
          >
            <Link href={instaHandle} target="_blank"><Instagram /></Link>
            <Link href={linkedinHandle} target="_blank"><LinkedIn /></Link>
            <Link href={facebookHandle} target="_blank"><Facebook /></Link>
          </Box>
        )
      }
    },
    {
      headerName: "Action",
      flex: 1,
      renderCell: ({row}) => {
        return (
          <Box display={"flex"}
            flexDirection={"row"}
            gap={2}
          >
            <Button sx={{ marginTop: "7px" }} onClick={() => handleOpen(row)}><Edit color='primary' /></Button>
            <Button sx={{ marginTop: "7px" }}><Delete color='error' /></Button>
          </Box>
        )
      }
    },
  ];

  const handleSubmit = (values) => {
    console.log(values);
    // Implement your update logic here
    handleClose();
  };

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
      >
        <DataGrid rows={mockData} columns={columns} />
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          position="absolute"
          top="20%"
          left="45%"
          transform="translate(-50%, -50%)"
          width={400}
          bgcolor="background.paper"
          border="2px solid #000"
          boxShadow={24}
          p={4}
        >
          <h2>Edit Member</h2>
          {currentRow && (
            <Formik
              initialValues={{
                userEmail:currentRow.userEmail,
                userName: currentRow.userName,
                riId: currentRow.riId,
                yearOfRotraction: currentRow.yearOfRotraction,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <Box mb={2}>
                    <TextField
                      name="userName"
                      label="Name"
                      fullWidth
                      error={touched.userName && Boolean(errors.userName)}
                      helperText={touched.userName && errors.userName}
                    />
                  </Box>
                  <Box mb={2}>
                    <Field
                      as={TextField}
                      name="riId"
                      label="RI ID"
                      fullWidth
                      error={touched.riId && Boolean(errors.riId)}
                      helperText={touched.riId && errors.riId}
                    />
                  </Box>
                  <Box mb={2}>
                    <Field
                      as={TextField}
                      name="userEmail"
                      label="Email"
                      fullWidth
                      error={touched.userEmail && Boolean(errors.userEmail)}
                      helperText={touched.userEmail && errors.userEmail}
                    />
                  </Box>
                  <Box mb={2}>
                    <Field
                      as={TextField}
                      name="yearOfRotraction"
                      label="Years of Rotraction"
                      fullWidth
                      type="number"
                      error={touched.yearOfRotraction && Boolean(errors.yearOfRotraction)}
                      helperText={touched.yearOfRotraction && errors.yearOfRotraction}
                    />
                  </Box>
                  <Box display="flex" justifyContent="flex-end">
                    <Button onClick={()=>{toast.success("Successfully saved")}} variant="contained" color="primary" type="submit">
                      Save
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          )}
        </Box>
      </Modal>
    </Box>
  )
}

export default ViewUsers