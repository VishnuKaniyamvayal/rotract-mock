import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard/index";
import NavBar from "./scenes/global/NavBar";
import { useContext } from "react";
import Login from "./scenes/Login/Login";
import { Toaster } from 'react-hot-toast';
import { AuthContext } from "./context/AuthContext";
import NotFound from "./components/NotFound";
import ManageMembers from "./scenes/ManageMembers/ManageMembers";
import ManageUsers from "./scenes/ManageUsers/ManageUsers";
import Reporting from "./scenes/Reporting/Reporting";
import ClubProfile from "./scenes/ClubProfile/ClubProfile";
import TRF from "./scenes/TRF/TRF";
import Calendar from "./scenes/Calendar/Calendar";
import Grievance from "./scenes/Grievances/Grievances";
import Resources from "./scenes/Resources/Resources";
import CabinetDashboard from "./scenes/CabinetDashboard/CabinetDashboard"
import ClubDashboard from "./scenes/ClubDashboard/ClubDashboard"
import Profile from "./scenes/Profile/Profile";

function App() {
  const [theme, colorMode] = useMode();
  const { user } = useContext(AuthContext);

  const renderRoutes = () => {
    if (!user) {
      return (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
    }

    return (
      <>
        <NavBar className="navbar"/>
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/cabinet-dashboard" element={<CabinetDashboard />} />
            <Route path="/club-dashboard" element={<ClubDashboard />} />
            <Route path="manage-members" element={<ManageMembers/>}/>
            <Route path="manage-users" element={<ManageUsers/>}/>
            <Route path="reporting" element={<Reporting/>}/>
            <Route path="club-profile" element={<ClubProfile/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="trf" element={<TRF/>}/>
            <Route path="calendar" element={<Calendar/>}/>
            <Route path="grievance" element={<Grievance/>}/>  
            <Route path="resources" element={<Resources/>}/>        
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </>
    );
  };

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <div className="app">
          {renderRoutes()}
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
