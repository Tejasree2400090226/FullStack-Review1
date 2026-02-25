function Deadlines() {
  return (
    <>
      <div className="topbar">
        <div>
          <h1>Project Deadlines</h1>
          
        </div>
        <div className="bell">🔔</div>
      </div>

      <div className="deadlines-wrapper">

        {/* LEFT SIDE — ALL DEADLINES */}
        <div className="deadline-card">

          <div className="card-header">
            <h3>All Deadlines</h3>
          </div>

          {/* Timeline Item */}
          <div className="timeline-item">
            <div className="circle red">1</div>
            <div className="timeline-content">
              <div className="timeline-top">
                <h4>Problem Statement Submission</h4>
                <span className="badge high">high</span>
                <span className="days">2d</span>
              </div>
              <p className="timeline-date">
                2026-02-25 · FSAD-PS39
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle orange">2</div>
            <div className="timeline-content">
              <div className="timeline-top">
                <h4>System Design Document</h4>
                <span className="badge high">high</span>
                <span className="days">10d</span>
              </div>
              <p className="timeline-date">
                2026-03-05 · FSAD-PS39
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle yellow">3</div>
            <div className="timeline-content">
              <div className="timeline-top">
                <h4>Frontend Prototype</h4>
                <span className="badge medium">medium</span>
                <span className="days">25d</span>
              </div>
              <p className="timeline-date">
                2026-03-20 · FSAD-PS39
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="circle navy">4</div>
            <div className="timeline-content">
              <div className="timeline-top">
                <h4>Mid-term Evaluation</h4>
                <span className="badge high">high</span>
                <span className="days">33d</span>
              </div>
              <p className="timeline-date">
                2026-03-28 · FSAD-PS39
              </p>
            </div>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="right-column">

          {/* PHASE COMPLETION CARD */}
          <div className="deadline-card">
            <div className="card-header">
              <h3>Phase Completion</h3>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>Problem Statement</span>
                <span>100%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "100%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>System Design</span>
                <span>60%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "60%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>Frontend</span>
                <span>30%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "30%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-header">
                <span>Backend</span>
                <span>10%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "10%" }}></div>
              </div>
            </div>
          </div>


          {/* UPCOMING MILESTONES CARD */}
          <div className="deadline-card">

            <div className="card-header">
              <h3>Upcoming Milestones</h3>
            </div>

            <div className="milestone">
              <span>Problem Statement Submission</span>
              <span>Feb 25</span>
            </div>

            <div className="milestone">
              <span>System Design Document</span>
              <span>Mar 05</span>
            </div>

            <div className="milestone">
              <span>Frontend Prototype</span>
              <span>Mar 20</span>
            </div>

            <div className="milestone">
              <span>Mid-term Evaluation</span>
              <span>Mar 28</span>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Deadlines;