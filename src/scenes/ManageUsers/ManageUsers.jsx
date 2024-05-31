import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ThemeButton from '../../components/ThemeButton';
import AddUsers from './AddUsers';
import ViewUsers from './ViewUsers';
import axios from './../../config/axiosConfig';
import toast from 'react-hot-toast';

const ManageUsers = () => {
  const [mode, setMode] = useState("view-users") // there are two modes view members and add members
  const [clubs,setClubs] =useState([{clubName:"Club 1",clubId:1},{clubName:"Club 2",clubId:2},{clubName:"Club 3",clubId:3}]) 

  const changeMode = (mode)=>{
    setMode(mode)
  }

  const fetchAllClubs = async()=>{
    try{
      const res = await axios.get(process.env.REACT_APP_BASE_URL + "api/club/get-all-clubs")
      setClubs(res.data)
    }
    catch(err){
      err.response ? toast.error(err.response.data.message) : toast.error("Failed To fetch Clubs") 
    }
    
  }
  
  useEffect(()=>{
    // fetchAllClubs()
  },[])

  return (<>
    <Typography variant='h3' mx={2} sx={{ cursor: "default" }}>Manage Users</Typography>
    <Box display={"flex"} mt={2} mb={7} mx={15} justifyContent={"end"}>
      <ThemeButton onClick={()=>{mode == "add-users" ? changeMode("view-users") : changeMode("add-users")}}>{ mode == "add-users" ? "View Users" : "Add Users"}</ThemeButton>
    </Box>
    {
      mode == "add-users"?
      <AddUsers allClubs={clubs}/> :
      <ViewUsers/>
    }
  </>
  )
}

export default ManageUsers