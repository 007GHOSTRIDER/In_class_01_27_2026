import { useEffect, useState } from "react";

function GithubProfile({ username }) {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!username) {
      // no username -> reset state and don't fetch
      setProfile(null);
      setHasError(false);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setHasError(false);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setProfile(data);
          setIsLoading(false);
        },
        (error) => {
          console.error(error);
          setIsLoading(false);
          setHasError(true);
        }
      );
  }, [username]);

  if (!username) {
    return <p>Enter a username to search.</p>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (hasError) {
    return <h2>Has error!</h2>;
  }

  if (!profile || profile.message === "Not Found") {
    return <h2>User not found.</h2>;
  }

  return (
    <>
      <h2>Github Profile for: {profile.name || profile.login}</h2>
      <img src={profile.avatar_url} alt="Github user" />
    </>
  );
}

export default GithubProfile;
