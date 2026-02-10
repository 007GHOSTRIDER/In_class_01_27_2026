import { useState } from "react";
import { Link } from "react-router-dom";
import GithubProfile from "./GithubProfile";

function Home() {
  const [username, setUsername] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const value = event.target["username-input"].value.trim();
    setUsername(value);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="about">About</Link>

      <h2>Github profile</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username-input">Username: </label>
        <input type="text" name="username-input" id="username-input" />
        <button type="submit">Search</button>
      </form>

      {/* Shows helper text or profile depending on username */}
      <GithubProfile username={username} />
    </div>
  );
}

export default Home;
