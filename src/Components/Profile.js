// Profile.js
import React, { useEffect, useState } from 'react';

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (userId) {
      fetch(`https://dummyjson.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem('userDetails', JSON.stringify(data));
          setUser(data);
        });
    }
  }, [userId]);

  const handleLogout = () => {
    // Clear user details from localStorage or perform any necessary logout actions
    localStorage.removeItem('user');
    localStorage.removeItem('userDetails');
    // Redirect to the login page
    window.location.href = '/'; // Redirect to the login page assuming it's root ('/')
  };

  return (
    <div className="profile-container">
        {<p className="login-successful">Login Successful</p>}
       <a href="#" className="back-to-login" onClick={handleLogout}>Logout</a>
    </div>
  );
};

export default Profile;
