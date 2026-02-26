function Dashboard() {
  const deadlines = [
    { days: 1, title: "Problem Statement Submission", date: "2026-02-25" },
    { days: 5, title: "System Design Document", date: "2026-03-02" },
    { days: 24, title: "Frontend Prototype", date: "2026-03-30" },
    { days: 32, title: "Mid-term Evaluation", date: "2026-04-08" },
  ];

  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>My Dashboard</h1>
          
        </div>
        <div className="profile-right">
          
          <h4>{user?.name}</h4>
          🔔
        </div>
      </div>

      {/* STATS */}
      <div className="dashboard-stats">
        <div className="dashboard-card">
          <p>Overall Score</p>
          <h2>82/100</h2>
        </div>

        <div className="dashboard-card">
          <p>Tasks</p>
          <h2>2/8</h2>
        </div>

        <div className="dashboard-card">
          <p>Deadlines</p>
          <h2>6 Left</h2>
        </div>

        <div className="dashboard-card">
          <p>Feedbacks</p>
          <h2>3 reviews</h2>
        </div>
      </div>

      {/* DEADLINES SECTION */}
      <div className="deadline-section">

        <div className="deadline-header-modern">
          <h3>Next Deadlines</h3>
          <span className="view-all">View all →</span>
        </div>

        <div className="deadline-list">
          {deadlines.map((item, index) => (
            <div className="deadline-item" key={index}>
              <div className="deadline-badge">
                {item.days}
              </div>

              <div className="deadline-info">
                <h4>{item.title}</h4>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
const user = JSON.parse(localStorage.getItem("user"));

export default Dashboard;