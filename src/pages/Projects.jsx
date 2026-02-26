function Projects() {
  return (
    <div className="projects-page">

      {/* ===== HEADER ===== */}
      <div className="projects-header">

        <div>
          <h1>Welcome back, Alex 👋</h1>
          <p className="subtitle">
            3rd Year · Computer Science
          </p>
        </div>

        <button className="new-project-btn">
          + New Project
        </button>

      </div>

      {/* ===== STATS ===== */}
      <div className="stats-row">

        <div className="stat-card-modern">
          <p>Active Projects</p>
          <h2>3</h2>
        </div>

        <div className="stat-card-modern">
          <p>Average Progress</p>
          <h2>64%</h2>
        </div>

        <div className="stat-card-modern">
          <p>Total Submissions</p>
          <h2>18</h2>
        </div>

        <div className="stat-card-modern">
          <p>Badges Earned</p>
          <h2>3</h2>
        </div>

      </div>

      {/* ===== MAIN GRID ===== */}
      <div className="projects-grid">

        {/* LEFT SIDE */}
        <div className="projects-left">

          <h2 className="section-title">My Projects</h2>

          {/* Project Card */}
          <div className="project-card-modern">
            <div className="project-top">
              <h3>E-Commerce Platform</h3>
              <span className="status active">Active</span>
            </div>

            <p className="project-desc">
              Full-stack platform with AI recommendations and real-time inventory.
            </p>

            <div className="tags">
              <span>React</span>
              <span>Node</span>
              <span>AI</span>
              <span>PostgreSQL</span>
            </div>

            <div className="progress-wrapper">
              <div className="progress-bar-modern">
                <div className="progress-fill-modern" style={{ width: "78%" }}></div>
              </div>
              <span className="progress-text">78% Complete</span>
            </div>

            <div className="project-footer">
              <span>3/6 milestones</span>
              <span>Due Mar 15</span>
            </div>
          </div>

          <div className="project-card-modern">
            <div className="project-top">
              <h3>Smart Attendance System</h3>
              <span className="status active">Active</span>
            </div>

            <p className="project-desc">
              Facial recognition attendance system with cloud database.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>OpenCV</span>
              <span>Firebase</span>
            </div>

            <div className="progress-wrapper">
              <div className="progress-bar-modern">
                <div className="progress-fill-modern" style={{ width: "55%" }}></div>
              </div>
              <span className="progress-text">55% Complete</span>
            </div>

            <div className="project-footer">
              <span>2/5 milestones</span>
              <span>Due Apr 10</span>
            </div>
          </div>

          <div className="project-card-modern">
            <div className="project-top">
              <h3>Mental Health Tracker</h3>
              <span className="status draft">Draft</span>
            </div>

            <p className="project-desc">
              Wellness app with mood tracking and AI chatbot.
            </p>

            <div className="tags">
              <span>React Native</span>
              <span>MongoDB</span>
              <span>AI</span>
            </div>

            <div className="progress-wrapper">
              <div className="progress-bar-modern">
                <div className="progress-fill-modern" style={{ width: "30%" }}></div>
              </div>
              <span className="progress-text">30% Complete</span>
            </div>

            <div className="project-footer">
              <span>1/4 milestones</span>
              <span>Due May 05</span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="projects-right">

          <div className="side-card-modern">
            <h3>Upcoming Milestones</h3>
            <ul>
              <li>Frontend Development — Now</li>
              <li>Testing & QA — Mar 21</li>
              <li>Final Submission — Apr 04</li>
            </ul>
          </div>

          <div className="side-card-modern">
            <h3>Achievements</h3>
            <div className="badge-modern">🏆 First Project</div>
            <div className="badge-modern">⚡ Fast Learner</div>
            <div className="badge-modern">✅ On Time</div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;