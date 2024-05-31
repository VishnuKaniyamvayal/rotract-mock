import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ThemeButton from '../../components/ThemeButton';
import AddMembers from './AddMembers';
import ViewMembers from './ViewMembers';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ManageMembers = () => {
  const [mode, setMode] = useState("view-members") // there are two modes view members and add members
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  },[])

  const changeMode = () => {
    if(mode == "add-members"){
      setMode("view-members")
    }
    else{
      setMode("add-members")
    }
  }

  return (<>
    <Typography variant='h3' mx={2} sx={{ cursor: "default" }}>Manage Members</Typography>
    <Box display={"flex"} mt={2} mb={7} mx={15} justifyContent={"end"}>
      <ThemeButton onClick={()=>{changeMode()}}>{mode == "add-members" ? "View Members" : "Add Members"}</ThemeButton>
    </Box>
    {
      mode == "add-members"?
      <AddMembers/> :
      <ViewMembers/>
    }
  </>
  )
}

export default ManageMembers