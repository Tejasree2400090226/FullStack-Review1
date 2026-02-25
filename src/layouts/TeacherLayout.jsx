import { Outlet, NavLink } from "react-router-dom";
import Topbar from "../components/Topbar";

function TeacherLayout() {
  return (
    <div className="layout">

      {/* Sidebar */}
      <aside className="sidebar">
        
        <div className="sidebar-header">
          <div className="logo-box">📘</div>
          <div>
            <h3>Teacher Panel</h3>
            <p>ProjectTrack</p>
          </div>
        </div>

        <nav>
          <ul className="menu">
            <li>
              <NavLink
                to="/teacher/overview"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                📊 Overview
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/teacher/submissions"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                📂 Submissions
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/teacher/students"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                👩‍🎓 Students
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/teacher/feedback-topics"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                💬 Feedback Topics
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="sidebar-footer">
          <div className="teacher-profile">
            <div className="avatar">T</div>
            <div>
              <strong>Ms. Teacher</strong>
              <p>teacher@email.com</p>
            </div>
          </div>
        </div>

      </aside>

      {/* Main Area */}
      <div className="main">
        <Topbar />
        <div className="content-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TeacherLayout;