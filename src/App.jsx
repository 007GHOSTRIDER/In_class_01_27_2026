import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import './App.css'
import GithubProfile from './GithubProfile'
import { useState } from 'react'

const Home = () => {
  return (
  <div>
    <h1>Home Page</h1>
    <Link to='about'>About</Link>
  </div>
)
}


const About = ({name}) => <div><h1>About: {name}</h1><Link to='/'>Home</Link></div>


const GitHubProfilePage = () => {
  const location = useLocation()
  console.log(location)
  const {githubUserName} = useParams()
return (
  <div>
    <h1>Profile Page for {githubUserName}</h1>  
    <GithubProfile username={githubUserName} />
  </div>)
}

function App() {
  // const [username, setUsername] = useState('')

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   setUsername(event.target[0].value)
  // }

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About name="James" />} />
      <Route path="github-user/:githubUserName" element={<GitHubProfilePage />} />
    </Routes>
      {/* <h1>Github profile</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username-input">Username: </label>
        <input type="text" name="username-input" id="username-input" />
        <button type="submit">Search</button>
      </form>
      <GithubProfile username={username} /> */}
    </>
  )
}

export default App
