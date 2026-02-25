import { NavLink } from "react-router-dom";
import { LayoutDashboard, Folder, Briefcase, CalendarDays, MessageSquare, BarChart3 } from "lucide-react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo-box">📘</div>
        <div>
          <h2>ProjectTrack</h2>
          <p>Student Portal</p>
        </div>
      </div>

      <ul className="menu">
        <li>
          <NavLink 
            to="/dashboard"
            className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
          >
            <LayoutDashboard size={18}/> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/projects"
            className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
          >
            <Folder size={18}/> Projects
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/portfolio"
            className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
          >
            <Briefcase size={18}/> Portfolio
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/deadlines"
            className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
          >
            <CalendarDays size={18}/> Deadlines
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/feedback"
            className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
          >
            <MessageSquare size={18}/> Feedback
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/progress"
            className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}
          >
            <BarChart3 size={18}/> Progress
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;