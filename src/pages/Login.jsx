import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    // simple demo logic (no backend yet)

    if (role === "student") {
      navigate("/dashboard");
    } else {
      navigate("/teacher/overview");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <div className="left-content">
          <img
            src="https://illustrations.popsy.co/blue/student-graduation.svg"
            alt="illustration"
          />
          <h2>ProjectTrack: Your project management companion</h2>
          <p>Manage projects, get feedback, track progress & reviews.</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-box">

          <div className="login-tabs">
            <button
              className={role === "student" ? "active-tab" : ""}
              onClick={() => setRole("student")}
            >
              🎓 Student
            </button>

            <button
              className={role === "teacher" ? "active-tab" : ""}
              onClick={() => setRole("teacher")}
            >
              🛡 Admin / Teacher
            </button>
          </div>

          <div className="login-group">
            <label>Email Address</label>
            <input type="email" placeholder="student@demo.com" />
          </div>

          <div className="login-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <div className="login-group">
            <label>Security Check (CAPTCHA)</label>

            <div className="captcha-row">
              <div className="captcha-question">7 × 8 = ?</div>
              <button className="captcha-refresh">⟳</button>
            </div>

            <input type="text" placeholder="Enter the answer" />
            <small>
              Solve the math problem above to verify you're human
            </small>
          </div>

          <button className="login-button" onClick={handleLogin}>
            {role === "student"
              ? "Sign In as Student"
              : "Sign In as Teacher"}
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;