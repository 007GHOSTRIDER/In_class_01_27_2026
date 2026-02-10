import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import GithubProfile from "./GithubProfile";

const About = ({ name }) => (
  <div>
    <h1>About: {name}</h1>
    <Link to="/">Home</Link>
  </div>
);

const GitHubProfilePage = () => {
  const location = useLocation();
  console.log(location);
  const { githubUserName } = useParams();

  return (
    <div>
      <h1>Profile Page for {githubUserName}</h1>
      <GithubProfile username={githubUserName} />
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About name="James" />} />
        <Route
          path="github-user/:githubUserName"
          element={<GitHubProfilePage />}
        />
      </Routes>
    </>
  );
}

export default App;
