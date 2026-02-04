import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function GithubProfile({username}) {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false)
  // const navigate = useNavigate()

  useEffect(() => {
    if (username) 
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(
        (data) => {
        setProfile(data)
        setIsLoading(false)
        // navigate('/about')
      },
      (error) => {
        console.error(error)
        setIsLoading(false)
        setHasError(true)
      }
    )
  }, [username])

  if (isLoading) {
    return <h1>Loading....</h1>
  }

  if (hasError) {
    return <h1>Has error!</h1>
  }
  

  return (
    <>
    <h2>Github Profile for: {profile.name}</h2>
    <img src={profile.avatar_url} alt="Github user" />
    {/* {profile ? <p>Has Provile</p> : null} */}
    </>
  );
}
