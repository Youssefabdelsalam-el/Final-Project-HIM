import { Routes, Route } from "react-router-dom";
import Mainlayout from '../Layout/Mainlayout'
import HomePage from "../Pages/HomePage";
import Aboutpage from "../Pages/Aboutpage";
import LoginPage from "../Pages/LoginPage";
import DashbordStoudentPage from "../Pages/DashbordStoudentPage";
import Home from "../Components/DashbordStudent/Home";
import Profile from "../Components/DashbordStudent/Profile";
import MainIngredient from "../Components/DashbordStudent/MainIngredient";
import CoursesList from "../Components/DashbordStudent/Courses/CoursesList";
import Lectures from "../Components/DashbordStudent/Lectures/Lectures";
import Assignment from "../Components/DashbordStudent/Assignments/Assignment";
import Settings from "../Components/DashbordStudent/Setting/Settings";
import Advertisement from "../Components/DashbordStudent/Advertisements/Advertisement";
import AttendanceTracker from "../Components/DashbordStudent/AttendanceTracker/AttendanceTracker";
import ClassSchedule from "../Components/DashbordStudent/ClassSchedule/ClassSchedule";
import Tests from "../Components/DashbordStudent/Tests/Tests";
import DoctorDrawer from "../Components/DashbordDoctor/DoctorDrawer";
import HomeDoctor from "../Components/DashbordDoctor/Home/Home";

export default function AppRouter() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Mainlayout/>}>
        <Route index element={<HomePage/>} />
        <Route path="about" element={<Aboutpage/>}></Route>
        <Route path="login" element={<LoginPage/>}></Route>
      </Route>

      <Route path="Dashbord Student" element={<MainIngredient/>}>
        <Route index element={<Home/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="Courses" element={<CoursesList/>} />
        <Route path="Lectures" element={<Lectures/>} />
        <Route path="Assignment" element={<Assignment/>} />
        <Route path="Settings" element={<Settings/>} />
        <Route path="Advertisement" element={<Advertisement/>} />
        <Route path="AttendanceTracker" element={<AttendanceTracker/>} />
        <Route path="ClassSchedule" element={<ClassSchedule/>} />
        <Route path="Tests" element={<Tests/>} />
      </Route>

      <Route path="Dashbord Doctor" element={<DoctorDrawer/>}>
      <Route index element={<HomeDoctor/>} />
      
      </Route>
    </Routes>
    </>
  )
}
