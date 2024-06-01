import React, { useContext, useEffect, useState } from 'react'
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { IconButton } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import Groups2Icon from '@mui/icons-material/Groups2';
import { AuthContext } from '../../context/AuthContext';
import GroupIcon from '@mui/icons-material/Group';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AccountBox, CalendarMonth, Money } from '@mui/icons-material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography variant='h5'>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [tabs, setTabs] = useState([]);
  const { user } = useContext(AuthContext)
  useEffect(() => {
    // for club users
    if (user.userType == "3") {
      setTabs([
        { type: "head", head: "Club" },
        { type: "tab", title: "Dashboard", to: "/club-dashboard", icon: <AnalyticsIcon /> },
        { type: "tab", title: "Manage members", to: "/manage-members", icon: <GroupIcon /> },
        { type: "tab", title: "Reporting", to: "/reporting", icon: <AssessmentIcon /> },
        { type: "tab", title: "Club Profile", to: "/club-profile", icon: <Groups2Icon /> },
        { type: "tab", title: "Calendar", to: "/Calendar", icon: <Groups2Icon /> },
        { type: "tab", title: "TRF", to: "/trf", icon: <Money/> },
        { type: "tab", title: "Grievance", to: "/grievance", icon: <NewReleasesIcon/> },
        { type: "tab", title: "Resources", to: "/resources", icon: <CloudCircleIcon /> },
      ])
    }
    if(user.userType == "2"){
      setTabs([
        { type: "tab", title: "Dashboard", to: "/cabinet-dashboard", icon: <AnalyticsIcon /> },
        { type: "tab", title: "Reporting", to: "/reporting", icon: <AssessmentIcon /> },
        { type: "tab", title: "My Profile", to: "/profile", icon: <AccountBox /> },
        { type: "tab", title: "Calendar", to: "/calendar", icon: <CalendarMonth /> },
        { type: "tab", title: "Resources", to: "/resources", icon: <CloudCircleIcon /> },
        { type: "tab", title: "TRF", to: "/trf", icon: <Money/> },
        { type: "tab", title: "Grievance", to: "/grievance", icon: <NewReleasesIcon/> },  
      ])
    }
    // admin
    if (user.userType == "1") {
      setTabs([
        { type: "head", head: "Dashboard" },
        { type: "tab", title: "Statistics", to: "/statistics", icon: <AnalyticsIcon /> },
        { type: "head", head: "Members and Clubs" },
        { type: "tab", title: "Manage Users", to: "/manage-users", icon: <GroupIcon /> },
        { type: "tab", title: "Leaderboard", to: "/leaderboard", icon: <LeaderboardIcon /> },
        { type: "head", head: "Account" },
      ])
    }
    if (user.userType == "4") {
      setTabs([
        { type: "head", head: "Profile" },
        { type: "tab", title: "profile", to: "/profile", icon: <AccountCircleIcon /> },
      ])
    }
  }, [user])



  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="5px"
              >
                <img src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="" srcset="" width={140} />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                {user.userName}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                {user.userName}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {
              tabs.map((element, index) => {
                return (
                  element.type == "tab" ?
                    <Item
                      key={index}
                      title={element.title}
                      to={element.to}
                      icon={element.icon}
                      selected={selected}
                      setSelected={setSelected}
                    />
                    :
                    !isCollapsed &&
                    <Typography
                      key={index}
                      variant="h6"
                      color={colors.grey[300]}
                      sx={{ m: "15px 10px 5px 20px" }}
                    >
                      {element.head}
                    </Typography>
                )
              })
            }
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}

export default NavBar