import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login";

// STUDENT
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import Portfolio from "./pages/Portfolio";
import NewPortfolio from "./pages/NewPortfolio";
import Deadlines from "./pages/Deadlines";
import Feedback from "./pages/Feedback";
import Progress from "./pages/Progress";
import StudentProfile from "./pages/StudentProfile";

// TEACHER
import TeacherOverview from "./pages/teacher/TeacherOverview";
import TeacherSubmissions from "./pages/teacher/TeacherSubmissions";
import TeacherStudents from "./pages/teacher/TeacherStudents";
import TeacherProgress from "./pages/teacher/TeacherProgress";
import TeacherFeedback from "./pages/teacher/TeacherFeedback";

// LAYOUTS
import Layout from "./components/Layout";
import TeacherLayout from "./layouts/TeacherLayout";

function App() {

  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* STUDENT ROUTES */}
        <Route
          element={
            role === "student"
              ? <Layout />
              : <Navigate to="/" />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/new" element={<NewProject />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/new" element={<NewPortfolio />} />
          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/profile" element={<StudentProfile />} />
        </Route>

        {/* TEACHER ROUTES */}
        <Route
          path="/teacher"
          element={
            role === "teacher"
              ? <TeacherLayout />
              : <Navigate to="/" />
          }
        >
          <Route index element={<TeacherOverview />} />
          <Route path="overview" element={<TeacherOverview />} />
          <Route path="submissions" element={<TeacherSubmissions />} />
          <Route path="students" element={<TeacherStudents />} />
          <Route path="progress" element={<TeacherProgress />} />
          <Route path="feedback" element={<TeacherFeedback />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;