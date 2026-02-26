import { NavLink, Outlet } from "react-router-dom";

function TeacherLayout() {
  return (
    <div className="layout">

      <aside className="sidebar">

        <div className="sidebar-header-modern">
          <div className="logo-modern">PT</div>
          <div>
            <h2>Teacher Panel</h2>
            <p>ProjectTrack</p>
          </div>
        </div>

        <ul className="menu-modern">
          <li>
            <NavLink to="/teacher/overview">Overview</NavLink>
          </li>

          <li>
            <NavLink to="/teacher/submissions">Submissions</NavLink>
          </li>

          <li>
            <NavLink to="/teacher/students">Students</NavLink>
          </li>

          <li>
            <NavLink to="/teacher/progress">Progress</NavLink> {/* ✅ NEW */}
          </li>

          <li>
            <NavLink to="/teacher/feedback-topics">Feedback </NavLink>
          </li>
        </ul>

        <div className="sidebar-profile">
          <div className="profile-avatar">T</div>
          <div className="profile-info">
            <p>Ms. Teacher</p>
            <span>teacher@email.com</span>
          </div>
        </div>

      </aside>

      <main className="main">
        <Outlet />
      </main>

    </div>
  );
}

export default TeacherLayout;