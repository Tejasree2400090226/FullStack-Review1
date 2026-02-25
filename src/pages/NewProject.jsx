import { useState } from "react";

function NewProject() {
  const [milestones, setMilestones] = useState([
    { title: "", date: "" }
  ]);

  const addMilestone = () => {
    setMilestones([...milestones, { title: "", date: "" }]);
  };

  return (
    <>
      <div className="topbar">
        <div>
          <h1>New Project</h1>
          <p>Create and manage your academic project</p>
        </div>
      </div>

      <div className="content-area">
        <div className="form-card">

          <div className="form-group">
            <label>Project Title *</label>
            <input type="text" placeholder="AI Powered Plant Detection" />
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea placeholder="Describe your project..." />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category *</label>
              <select>
                <option>Web Development</option>
                <option>AI / ML</option>
                <option>Mobile App</option>
              </select>
            </div>

            <div className="form-group">
              <label>Deadline *</label>
              <input type="date" />
            </div>
          </div>

          <div className="form-group">
            <label>Project GitHub URL</label>
            <input type="url" placeholder="https://github.com/project" />
          </div>

          <div className="form-group">
            <label>Live Project URL</label>
            <input type="url" placeholder="https://project.com" />
          </div>

          <div className="form-group">
            <label>Upload Project Files</label>
            <input type="file" multiple />
          </div>

          <h3 className="section-title-form">Milestones</h3>

          {milestones.map((m, index) => (
            <div key={index} className="form-row">
              <div className="form-group">
                <label>Milestone Title</label>
                <input type="text" placeholder={`Milestone ${index + 1}`} />
              </div>

              <div className="form-group">
                <label>Milestone Date</label>
                <input type="date" />
              </div>
            </div>
          ))}

          <button type="button" className="add-btn" onClick={addMilestone}>
            + Add Milestone
          </button>

          <button className="submit-btn">
            Submit Project
          </button>

        </div>
      </div>
    </>
  );
}

export default NewProject;