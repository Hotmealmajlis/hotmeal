import React, { useState, useEffect } from "react";
import './userprofile.css'

const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:4000/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="user-profile">
      <h2>Profile</h2>
      <p>{user.name} c</p>
      <p>{user.email} c</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

export default UserProfile;
