import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

/* ================= STUDENT PAGES ================= */
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import Portfolio from "./pages/Portfolio";
import NewPortfolio from "./pages/NewPortfolio";
import Deadlines from "./pages/Deadlines";
import Feedback from "./pages/Feedback";
import Progress from "./pages/Progress";

/* ================= TEACHER PAGES ================= */
import TeacherOverview from "./pages/teacher/TeacherOverview";
import TeacherSubmissions from "./pages/teacher/TeacherSubmissions";  // ✅ FIXED
import TeacherStudents from "./pages/teacher/TeacherStudents";
import TeacherFeedbackTopics from "./pages/teacher/TeacherFeedbackTopics";

/* ================= LAYOUTS ================= */
import Layout from "./components/Layout";
import TeacherLayout from "./layouts/TeacherLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* ================= STUDENT ROUTES ================= */}
        <Route element={<Layout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/new" element={<NewProject />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/new" element={<NewPortfolio />} />

          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/progress" element={<Progress />} />

        </Route>

        {/* ================= TEACHER ROUTES ================= */}
        <Route path="/teacher" element={<TeacherLayout />}>

          <Route path="overview" element={<TeacherOverview />} />
          <Route path="submissions" element={<TeacherSubmissions />} />
          <Route path="students" element={<TeacherStudents />} />
          <Route path="feedback-topics" element={<TeacherFeedbackTopics />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;