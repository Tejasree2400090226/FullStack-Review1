import { useState } from "react";

function StudentProfile() {

  const [selectedProject, setSelectedProject] = useState(null);

  const student = {
    name: "Alex Johnson",
    year: "3rd Year - Computer Science",
    highestScore: 91,
    achievements: ["Top Performer", "On-Time Submission", "Fast Learner"],
    projects: [
      {
        title: "E-Commerce Platform",
        score: 91,
        milestones: [
          { name: "Problem Statement", done: true },
          { name: "System Design", done: true },
          { name: "Frontend", done: true },
          { name: "Backend", done: true },
          { name: "Final Submission", done: true },
        ],
      },
      {
        title: "Smart Attendance System",
        score: 78,
        milestones: [
          { name: "Problem Statement", done: true },
          { name: "System Design", done: true },
          { name: "Frontend", done: true },
          { name: "Backend", done: false },
          { name: "Final Submission", done: false },
        ],
      },
    ],
  };

  return (
    <div className="student-profile-container">

      {/* PROFILE HEADER */}
      <div className="profile-header-card">

        <div className="profile-avatar-large">
          AJ
        </div>

        <div className="profile-info-section">
          <h2>{student.name}</h2>
          <p>{student.year}</p>
          <div className="highest-score">
            Highest Grade: <span>{student.highestScore}/100</span>
          </div>
        </div>

      </div>

      {/* ACHIEVEMENTS */}
      <div className="profile-section">
        <h3>Achievements</h3>
        <div className="achievement-row">
          {student.achievements.map((item, index) => (
            <div key={index} className="achievement-badge">
              🏆 {item}
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT LIST */}
      <div className="profile-section">
        <h3>My Projects</h3>

        <div className="project-grid">
          {student.projects.map((project, index) => (
            <div
              key={index}
              className="profile-project-card-modern"
              onClick={() => setSelectedProject(project)}
            >
              <h4>{project.title}</h4>
              <p>Score: {project.score}/100</p>
            </div>
          ))}
        </div>
      </div>

      {/* MILESTONES VIEW */}
      {selectedProject && (
        <div className="milestone-box">
          <h3>{selectedProject.title} - Milestones</h3>

          <ul>
            {selectedProject.milestones.map((m, i) => (
              <li key={i} className={m.done ? "milestone-done" : "milestone-pending"}>
                {m.done ? "✔" : "○"} {m.name}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}

export default StudentProfile;