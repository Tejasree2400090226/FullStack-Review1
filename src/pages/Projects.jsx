function Projects() {
  return (
    <>
      {/* Top Section */}
      <div className="topbar">
        <div>
          <h1>Welcome back,</h1>
          <h2 className="student-name">Alex Johnson 👋</h2>
          <p>3rd Year · Computer Science</p>
        </div>

        <button className="new-project-btn">
          + New Project
        </button>
      </div>

      <div className="content-area">

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card">
            <h2>3</h2>
            <p>Active Projects</p>
          </div>
          <div className="stat-card">
            <h2>64%</h2>
            <p>Avg. Progress</p>
          </div>
          <div className="stat-card">
            <h2>18</h2>
            <p>Submissions</p>
          </div>
          <div className="stat-card">
            <h2>3</h2>
            <p>Badges Earned</p>
          </div>
        </div>

        {/* Main Layout */}
        <div className="projects-layout">

          {/* LEFT SIDE PROJECTS */}
          <div>

            <h2 className="section-title">Recent Projects</h2>

            {/* Project 1 */}
            <div className="project-card">
              <div className="project-header">
                <h3>E-Commerce Platform with AI Recommendations</h3>
                <span className="status-badge active">Active</span>
              </div>

              <p className="project-desc">
                A full-stack e-commerce platform featuring AI-powered product recommendations and real-time inventory.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>AI/ML</span>
                <span>PostgreSQL</span>
              </div>

              <div className="progress-section">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "78%" }}></div>
                </div>
                <span className="progress-percent">78%</span>
              </div>

              <p className="milestone-text">3/6 milestones</p>
              <p className="due-date">Due Mar 15, 2026</p>
            </div>


            {/* Project 2 */}
            <div className="project-card">
              <div className="project-header">
                <h3>Smart Attendance System</h3>
                <span className="status-badge active">Active</span>
              </div>

              <p className="project-desc">
                Facial recognition based attendance tracking system integrated with cloud database.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>OpenCV</span>
                <span>Firebase</span>
              </div>

              <div className="progress-section">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "55%" }}></div>
                </div>
                <span className="progress-percent">55%</span>
              </div>

              <p className="milestone-text">2/5 milestones</p>
              <p className="due-date">Due Apr 10, 2026</p>
            </div>


            {/* Project 3 */}
            <div className="project-card">
              <div className="project-header">
                <h3>Mental Health Tracker App</h3>
                <span className="status-badge draft">Draft</span>
              </div>

              <p className="project-desc">
                Mobile-first wellness app with mood tracking, journaling, and AI therapy chatbot.
              </p>

              <div className="project-tags">
                <span>React Native</span>
                <span>AI Chatbot</span>
                <span>MongoDB</span>
              </div>

              <div className="progress-section">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "30%" }}></div>
                </div>
                <span className="progress-percent">30%</span>
              </div>

              <p className="milestone-text">1/4 milestones</p>
              <p className="due-date">Due May 05, 2026</p>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="side-card">
              <h3>Upcoming Milestones</h3>
              <p>Frontend Development — Now</p>
              <p>Testing & QA — Mar 21</p>
              <p>Final Submission — Apr 4</p>
            </div>

            <div className="side-card">
              <h3>My Badges</h3>
              <div className="badge-box">First Project</div>
              <div className="badge-box">Fast Learner</div>
              <div className="badge-box">On Time</div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Projects;