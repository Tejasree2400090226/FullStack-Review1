function Feedback() {
  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div>
          <h1>Feedback & Reviews</h1>
          
        </div>
      </div>

      <div className="content-area">

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card">
            <h2>5</h2>
            <p>Total Reviews</p>
          </div>
          <div className="stat-card">
            <h2>3</h2>
            <p>Professors</p>
          </div>
          <div className="stat-card">
            <h2>2</h2>
            <p>Advisors</p>
          </div>
          <div className="stat-card">
            <h2>4.5</h2>
            <p>Avg. Rating</p>
          </div>
        </div>

        <div className="projects-layout">

          {/* LEFT SIDE */}
          <div>

            {/* Feedback Card 1 */}
            <div className="feedback-card">
              <h3>Student Portfolio Tracker App</h3>
              <p className="prof-name">Prof. Dr. Sarah Johnson · In Review</p>

              <div className="progress-section">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "55%" }}></div>
                </div>
                <span className="progress-percent">55%</span>
              </div>

              <p className="milestone-text">3/5 milestones</p>

              <div className="prof-feedback-box">
                <strong>Prof. Feedback:</strong>
                <p>
                  The UI is clean and intuitive. Please add proper
                  authentication flow before final submission.
                </p>
              </div>

              <p className="due-date">Due Apr 2, 2026 · 8 files</p>
            </div>


            {/* Feedback Card 2 */}
            <div className="feedback-card">
              <h3>Smart Healthcare Appointment System</h3>
              <p className="prof-name">Prof. Dr. Michael Lee · Completed</p>

              <div className="progress-section">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "92%" }}></div>
                </div>
                <span className="progress-percent">92%</span>
              </div>

              <p className="milestone-text">5/5 milestones</p>

              <div className="prof-feedback-box">
                <strong>Prof. Feedback:</strong>
                <p>
                  Excellent implementation! The ML scheduling algorithm
                  shows impressive accuracy. Well done.
                </p>
              </div>

              <p className="due-date">Due Feb 28, 2026 · 19 files</p>
            </div>

          </div>

          {/* RIGHT SIDE SUMMARY */}
          <div>

            <div className="side-card">
              <h3>Feedback Overview</h3>
              <div className="overview-row">
                <span>Total Reviews</span>
                <span>5</span>
              </div>
              <div className="overview-row">
                <span>Professors</span>
                <span>3</span>
              </div>
              <div className="overview-row">
                <span>Advisors</span>
                <span>2</span>
              </div>
              <div className="overview-row">
                <span>Avg Rating</span>
                <span>4.5</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Feedback;