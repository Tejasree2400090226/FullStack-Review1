import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid
} from "recharts";

function Progress() {
  const lineData = [
    { month: "Jan", score: 60 },
    { month: "Feb", score: 68 },
    { month: "Mar", score: 72 },
    { month: "Apr", score: 78 },
    { month: "May", score: 85 }
  ];

  const barData = [
    { name: "Frontend", progress: 80 },
    { name: "Backend", progress: 60 },
    { name: "Database", progress: 70 },
    { name: "Testing", progress: 40 }
  ];

  return (
    <>
      <div className="topbar">
        <div>
          <h1>My Progress</h1>
          <p>Track your academic and project growth</p>
        </div>
      </div>

      <div className="content-area">

        {/* Summary Cards */}
        <div className="progress-stats">
          <div className="progress-card">
            <h4>Overall Completion</h4>
            <h2>76%</h2>
          </div>

          <div className="progress-card">
            <h4>Projects Completed</h4>
            <h2>5 / 8</h2>
          </div>

          <div className="progress-card">
            <h4>Milestones Achieved</h4>
            <h2>18</h2>
          </div>
        </div>

        {/* Charts */}
        <div className="progress-charts">

          <div className="chart-card">
            <h3>Performance Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid stroke="#eee" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#1f3a68"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card">
            <h3>Module Progress</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid stroke="#eee" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="progress" fill="#2dd4bf" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </>
  );
}

export default Progress;