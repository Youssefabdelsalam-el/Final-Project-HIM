import { Routes, Route } from "react-router-dom";
import Mainlayout from '../Layout/Mainlayout'
import HomePage from "../Pages/HomePage";
import Aboutpage from "../Pages/Aboutpage";
import LoginPage from "../Pages/LoginPage";
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
import AdminDeawer from "../Components/DashbordAdmin/AdminDeawer";
import HomeAdmin from "../Components/DashbordAdmin/Home/HomeAdmin";
import Students from "../Components/DashbordAdmin/Students/Students";
import Courses from "../Components/DashbordAdmin/Courses/Courses";
import ClassSchedules from "../Components/DashbordAdmin/ClassSchedules/ClassSchedules";
import Grades from "../Components/DashbordAdmin/Grades/Grades";
import AdvertisementAdmin from "../Components/DashbordAdmin/AdvertisementAdmin/AdvertisementAdmin";
import RequestsAndComplaints from "../Components/DashbordAdmin/RequestsAndComplaints/RequestsAndComplaints";
import SettingAdmin from "../Components/DashbordAdmin/settingAdmin/SettingAdmin";
import MyCoursesPage from "../Components/DashbordDoctor/MyCoursesPage/MyCoursesPage";
import CourseDetails from "../Components/DashbordDoctor/MyCoursesPage/CourseDetails";

import ExamDetails from "../Components/DashbordDoctor/MyCoursesPage/ContentExams/ExamDetailsPage/ExamDetails";
import AssignmentSubmissionspage from "../Components/DashbordDoctor/MyCoursesPage/ContentAssignments/AssignmentSubmissionspage";
import ProfileDoctor from "../Components/DashbordDoctor/ProfileDoctor";

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
      <Route path="ProfileDoctor" element={<ProfileDoctor/>} />
      <Route index element={<MyCoursesPage/>} />
      <Route path="CourseDetails" element={<CourseDetails/>} />
      <Route path="AssignmentSubmissions/:assignmentId" element={<AssignmentSubmissionspage/>} />
      <Route path="ExamDetails/:examId" element={<ExamDetails />} />
      
      </Route>



      <Route path="Dashbord Admin" element={<AdminDeawer/>}>
      <Route index element={<HomeAdmin/>} />
      <Route path="Students" element={<Students/>} />
      {/* <Route path="Doctors" element={<Doctors/>} /> */}
      <Route path="Courses" element={<Courses/>} />
      <Route path="ClassSchedules" element={<ClassSchedules/>}/>
      <Route path="Grades" element={<Grades/>}/>
      <Route path="AdvertisementAdmin" element={<AdvertisementAdmin/>}/>
      <Route path="RequestsAndComplaints" element={<RequestsAndComplaints/>}/>
      <Route path="SettingAdmin" element={<SettingAdmin/>}/>
      
      </Route>
    </Routes>
    </>
  )
}
