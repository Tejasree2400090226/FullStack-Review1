import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Folder, Briefcase, CalendarDays, MessageSquare, BarChart3, LogOut } from "lucide-react";

function Sidebar() {

  const navigate = useNavigate();

  // ✅ Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Student",
    email: "student@email.com"
  };

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="sidebar">

      <div className="sidebar-top">

        <div className="sidebar-header">
          <div className="logo-box">🎓</div>
          <p>Student Portal</p>
        </div>

        <ul className="menu">

          <li>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
              <LayoutDashboard size={18}/> Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
              <Folder size={18}/> Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
              <Briefcase size={18}/> Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink to="/deadlines" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
              <CalendarDays size={18}/> Deadlines
            </NavLink>
          </li>

          <li>
            <NavLink to="/feedback" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
              <MessageSquare size={18}/> Feedback
            </NavLink>
          </li>

          <li>
            <NavLink to="/progress" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
              <BarChart3 size={18}/> Progress
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile" className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>
              👤 Profile
            </NavLink>
          </li>

        </ul>
      </div>

      {/* Bottom Section */}
      <div className="sidebar-bottom">

        <div className="sidebar-profile">
          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="profile-info">
            <p>{user?.name}</p>
            <span>{user?.email}</span>
          </div>
        </div>

        <button className="logout-btn" onClick={handleLogout}>
          <LogOut size={16} style={{ marginRight: "6px" }} />
          Sign Out
        </button>

      </div>

    </div>
  );
}

export default Sidebar;