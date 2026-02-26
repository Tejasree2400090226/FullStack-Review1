function TeacherProgress() {
  return (
    <div className="teacher-progress-page">

      {/* TOP STATS */}
      <div className="progress-top-stats">

        <div className="progress-stat-card">
          <div className="stat-icon blue">📈</div>
          <h2 className="blue-text">79.4</h2>
          <p>Class Average</p>
        </div>

        <div className="progress-stat-card">
          <div className="stat-icon gold">🏆</div>
          <h2 className="gold-text">91</h2>
          <p>Highest Score</p>
          <span className="sub-text">Emma W.</span>
        </div>

        <div className="progress-stat-card">
          <div className="stat-icon green">🎖</div>
          <h2 className="green-text">94</h2>
          <p>Submissions</p>
        </div>

        <div className="progress-stat-card">
          <div className="stat-icon purple">📊</div>
          <h2 className="purple-text">88%</h2>
          <p>Completion Rate</p>
        </div>

      </div>


      {/* TOP PERFORMERS */}
      <div className="top-performers-section">

        <h3>🏆 Top Performers</h3>

        <div className="performers-grid">

          {/* 1 */}
          <div className="performer-card">
            <div className="performer-header">
              <div className="avatar-large gold-bg">EW</div>
              <div>
                <h4>#1 Emma Williams</h4>
              </div>
            </div>

            <div className="performer-stats">
              <div>
                <h3 className="gold-text">91</h3>
                <p>Score</p>
              </div>
              <div>
                <h3 className="blue-text">4</h3>
                <p>Projects</p>
              </div>
              <div>
                <h3 className="green-text">18</h3>
                <p>Submitted</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="performer-card">
            <div className="performer-header">
              <div className="avatar-large silver-bg">SC</div>
              <div>
                <h4>#2 Sarah Chen</h4>
              </div>
            </div>

            <div className="performer-stats">
              <div>
                <h3 className="gold-text">86</h3>
                <p>Score</p>
              </div>
              <div>
                <h3 className="blue-text">5</h3>
                <p>Projects</p>
              </div>
              <div>
                <h3 className="green-text">22</h3>
                <p>Submitted</p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="performer-card">
            <div className="performer-header">
              <div className="avatar-large bronze-bg">MT</div>
              <div>
                <h4>#3 Michael Torres</h4>
              </div>
            </div>

            <div className="performer-stats">
              <div>
                <h3 className="gold-text">77</h3>
                <p>Score</p>
              </div>
              <div>
                <h3 className="blue-text">6</h3>
                <p>Projects</p>
              </div>
              <div>
                <h3 className="green-text">25</h3>
                <p>Submitted</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default TeacherProgress;