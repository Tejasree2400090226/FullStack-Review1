import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [role, setRole] = useState("student");
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [answer, setAnswer] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Generate random captcha
  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1: n1, num2: n2 });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = () => {

    const correctAnswer = captcha.num1 * captcha.num2;

    if (parseInt(answer) !== correctAnswer) {
      alert("❌ CAPTCHA Incorrect. Try again.");
      generateCaptcha();
      setAnswer("");
      return;
    }

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // ✅ Create fake user object
    const userData = {
      name: email.split("@")[0],
      email: email
    };

    // ✅ Save in localStorage
    localStorage.setItem("role", role);
    localStorage.setItem("user", JSON.stringify(userData));

    // ✅ Redirect
    if (role === "student") {
      navigate("/dashboard");
    } else {
      navigate("/teacher");
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
            <input
              type="email"
              placeholder="exp@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-group">
            <label>Security Check (CAPTCHA)</label>

            <div className="captcha-row">
              <div className="captcha-question">
                {captcha.num1} × {captcha.num2} = ?
              </div>
              <button
                className="captcha-refresh"
                onClick={generateCaptcha}
                type="button"
              >
                ⟳
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter the answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />

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