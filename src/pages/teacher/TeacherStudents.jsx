function TeacherStudents() {
  return (
    <div className="teacher-students-page">

      {/* Search */}
      <div className="students-search">
        <input type="text" placeholder="Search students..." />
      </div>

      {/* Stats Cards */}
      <div className="students-stats">
        <div className="stat-box">
          <h2>5</h2>
          <p>All Students</p>
        </div>

        <div className="stat-box green">
          <h2>2</h2>
          <p>Excellent (80%+)</p>
        </div>

        <div className="stat-box blue">
          <h2>2</h2>
          <p>Good (60-80%)</p>
        </div>

        <div className="stat-box orange">
          <h2>1</h2>
          <p>Fair (40-60%)</p>
        </div>

        <div className="stat-box red">
          <h2>0</h2>
          <p>At Risk (&lt;40%)</p>
        </div>
      </div>

      {/* Student List */}
      <h3 className="students-title">All Students (5)</h3>

      <div className="students-list">

        {/* Student Card */}
        <div className="student-card">
          <div className="student-left">
            <div className="avatar">EW</div>
            <div>
              <h4>Emma Williams <span className="active-badge">Active</span></h4>
              <p>emma.w@university.edu • 3rd Year</p>
            </div>
          </div>

          <div className="student-middle">
            <div>
              <h4>4</h4>
              <p>Projects</p>
            </div>

            <div className="progress-area">
              <span>Progress</span>
              <span className="percent green-text">91%</span>
              <div className="progress-bar-modern">
                <div className="progress-fill-modern green" style={{ width: "91%" }}></div>
              </div>
            </div>
          </div>

          <div className="student-right">
            <p>30 mins ago</p>
            <button className="feedback-btn-modern">Feedback</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default TeacherStudents;