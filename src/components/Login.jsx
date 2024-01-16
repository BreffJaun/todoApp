// I M P O R T:   F I L E S
import "../styles/login.scss";

// I M P O R T:   P A C K A G E S
import { useState } from "react";

// I M P O R T:   F U N C T I O N S

// C O D E
const Login = ({ isLoggedIn, setLoggedIn, exampleUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username === exampleUser.username &&
      password === exampleUser.password
    ) {
      setLoggedIn(true);
      console.log("LOGIN.JSX: ", isLoggedIn);
    } else {
      setUsername("");
      setPassword("");
      alert("Wrong username or password!");
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
