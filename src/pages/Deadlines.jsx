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

          {/* Timeline Items */}
          {[
            {
              number: 1,
              color: "red",
              title: "Problem Statement Submission",
              priority: "high",
              days: "2d",
              date: "2026-02-25 · FSAD-PS39"
            },
            {
              number: 2,
              color: "orange",
              title: "System Design Document",
              priority: "high",
              days: "10d",
              date: "2026-03-05 · FSAD-PS39"
            },
            {
              number: 3,
              color: "yellow",
              title: "Frontend Prototype",
              priority: "medium",
              days: "25d",
              date: "2026-03-20 · FSAD-PS39"
            },
            {
              number: 4,
              color: "navy",
              title: "Mid-term Evaluation",
              priority: "high",
              days: "33d",
              date: "2026-03-28 · FSAD-PS39"
            }
          ].map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className={`circle ${item.color}`}>
                {item.number}
              </div>

              <div className="timeline-content">
                <div className="timeline-top">
                  <h4>{item.title}</h4>
                  <span className={`badge ${item.priority}`}>
                    {item.priority}
                  </span>
                  <span className="days">{item.days}</span>
                </div>
                <p className="timeline-date">
                  {item.date}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div className="right-column">

          {/* PHASE COMPLETION */}
          <div className="deadline-card">
            <div className="card-header">
              <h3>Phase Completion</h3>
            </div>

            {[
              { name: "Problem Statement", percent: 100 },
              { name: "System Design", percent: 60 },
              { name: "Frontend", percent: 30 },
              { name: "Backend", percent: 10 }
            ].map((phase, index) => (
              <div className="progress-item" key={index}>
                <div className="progress-header">
                  <span>{phase.name}</span>
                  <span>{phase.percent}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${phase.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* 🔥 IMPROVED UPCOMING MILESTONES */}
          <div className="deadline-card">

            <div className="card-header">
              <h3>Upcoming Milestones</h3>
            </div>

            <div className="milestone-modern">
              <div className="milestone-dot red-dot"></div>
              <div className="milestone-info">
                <h4>Problem Statement Submission</h4>
                <p>Due: Feb 25, 2026</p>
              </div>
              <div className="milestone-date-badge">
                2d
              </div>
            </div>

            <div className="milestone-modern">
              <div className="milestone-dot orange-dot"></div>
              <div className="milestone-info">
                <h4>System Design Document</h4>
                <p>Due: Mar 05, 2026</p>
              </div>
              <div className="milestone-date-badge">
                10d
              </div>
            </div>

            <div className="milestone-modern">
              <div className="milestone-dot yellow-dot"></div>
              <div className="milestone-info">
                <h4>Frontend Prototype</h4>
                <p>Due: Mar 20, 2026</p>
              </div>
              <div className="milestone-date-badge">
                25d
              </div>
            </div>

            <div className="milestone-modern">
              <div className="milestone-dot navy-dot"></div>
              <div className="milestone-info">
                <h4>Mid-term Evaluation</h4>
                <p>Due: Mar 28, 2026</p>
              </div>
              <div className="milestone-date-badge">
                33d
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Deadlines;