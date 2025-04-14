import React, { useState } from 'react';

const InfoAboutME = () => {
  const [userInfo, setUserInfo] = useState(null);

  // Handler to fetch user info from the backend
  const handleFetchUserInfo = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <div>
      <h1>InfoAboutME</h1>
      <button onClick={handleFetchUserInfo}>Get User Info</button>
      {userInfo && (
        <div>
          <h2>User Information:</h2>
          <pre>{JSON.stringify(userInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default InfoAboutME;
