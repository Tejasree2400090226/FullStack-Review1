import { useState } from "react";

function NewPortfolio() {
  const [links, setLinks] = useState([{ github: "", live: "" }]);

  const addLink = () => {
    setLinks([...links, { github: "", live: "" }]);
  };

  return (
    <>
      <div className="topbar">
        <div>
          <h1>Create Portfolio</h1>
          <p>Showcase your skills, projects, and achievements</p>
        </div>
      </div>

      <div className="content-area">
        <div className="form-card">

          <div className="form-group">
            <label>Portfolio Title *</label>
            <input type="text" placeholder="Full Stack Developer Portfolio" />
          </div>

          <div className="form-group">
            <label>Professional Summary *</label>
            <textarea placeholder="Tell about yourself..." />
          </div>

          <div className="form-group">
            <label>Skills *</label>
            <input type="text" placeholder="React, Node.js, AI, MongoDB" />
          </div>

          <h3 className="section-title-form">Project Links</h3>

          {links.map((link, index) => (
            <div key={index} className="form-row">
              <div className="form-group">
                <label>GitHub URL</label>
                <input type="url" placeholder="https://github.com/project" />
              </div>

              <div className="form-group">
                <label>Live URL</label>
                <input type="url" placeholder="https://project.com" />
              </div>
            </div>
          ))}

          <button type="button" className="add-btn" onClick={addLink}>
            + Add Another Link
          </button>

          <div className="form-group">
            <label>Upload Resume (PDF) *</label>
            <input type="file" />
          </div>

          <div className="form-group">
            <label>Certifications</label>
            <input type="file" multiple />
          </div>

          <div className="form-group">
            <label>LinkedIn Profile</label>
            <input type="url" placeholder="https://linkedin.com/in/yourprofile" />
          </div>

          <div className="form-group">
            <label>Portfolio Visibility</label>
            <select>
              <option>Public</option>
              <option>Private</option>
              <option>Only Teachers</option>
            </select>
          </div>

          <button className="submit-btn">
            Submit Portfolio
          </button>

        </div>
      </div>
    </>
  );
}

export default NewPortfolio;