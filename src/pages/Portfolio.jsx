import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <div className="topbar">
        <div>
          <h1>My Portfolio</h1>
          <p>Manage and submit your academic portfolio</p>
        </div>

        <Link to="/portfolio/new" className="new-portfolio-btn">
          + Create Portfolio
        </Link>
      </div>

      <div className="content-area">
        <div className="portfolio-empty-card">
          <h3>No Portfolio Created Yet</h3>
          <p>
            Create your portfolio to showcase your projects,
            skills, certifications, and achievements.
          </p>
        </div>
      </div>
    </>
  );
}

export default Portfolio;