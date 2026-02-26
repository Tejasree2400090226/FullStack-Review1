import { NavLink, Outlet, useNavigate } from "react-router-dom";

function TeacherLayout() {

  const navigate = useNavigate();

  // ✅ Get logged-in teacher from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ Safe values
  const teacherName = user?.name
    ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
    : "Teacher";

  const teacherEmail = user?.email || "teacher@email.com";

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload(); // ensures clean state reset
  };

  return (
    <div className="layout">

      <aside className="sidebar">

        {/* TOP */}
        <div className="sidebar-top">

          <div className="sidebar-header-modern">
            <div className="brand-logo">
              <span className="logo-icon">👨‍🏫</span>
            </div>
            <h2 className="brand-name">ProjectTrack</h2>
          </div>

          <ul className="menu-modern">
            <li><NavLink to="/teacher/overview">Overview</NavLink></li>
            <li><NavLink to="/teacher/submissions">Submissions</NavLink></li>
            <li><NavLink to="/teacher/students">Students</NavLink></li>
            <li><NavLink to="/teacher/progress">Progress</NavLink></li>
            <li><NavLink to="/teacher/feedback">Feedback</NavLink></li>
          </ul>

        </div>

        {/* BOTTOM */}
        <div className="sidebar-bottom">

          <div className="sidebar-profile">

            {/* ✅ Dynamic Avatar */}
            <div className="profile-avatar">
              {teacherName.charAt(0)}
            </div>

            {/* ✅ Dynamic Name + Email */}
            <div className="profile-info">
              <p>{teacherName}</p>
              <span>{teacherEmail}</span>
            </div>

          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Sign Out
          </button>

        </div>

      </aside>

      <main className="main">
        <Outlet />
      </main>

    </div>
  );
}

export default TeacherLayout;