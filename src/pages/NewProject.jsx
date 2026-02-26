import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewProject() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tech: "",
    deadline: "",
    milestone1: "",
    milestone2: "",
    milestone3: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);

    setTimeout(() => {
      navigate("/projects");
    }, 2000);
  };

  return (
    <div className="new-project-page">

      <h1>Create New Project</h1>

      {success && (
        <div className="success-message">
          🎉 Project Successfully Submitted!
        </div>
      )}

      <form className="project-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Project Title</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            required
            rows="4"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Technologies (comma separated)</label>
          <input
            type="text"
            name="tech"
            value={formData.tech}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Final Deadline</label>
          <input
            type="date"
            name="deadline"
            required
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>

        <h3>Milestones</h3>

        <div className="form-row">
          <input
            type="text"
            name="milestone1"
            placeholder="Milestone 1"
            value={formData.milestone1}
            onChange={handleChange}
          />
          <input
            type="text"
            name="milestone2"
            placeholder="Milestone 2"
            value={formData.milestone2}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="milestone3"
            placeholder="Milestone 3"
            value={formData.milestone3}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Project
        </button>

      </form>

    </div>
  );
}

export default NewProject;