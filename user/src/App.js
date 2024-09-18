import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

// Dummy JSON API URL
const USERS_API = 'https://dummyjson.com/users';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    fetch(USERS_API)
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container">
      <h1>Users List</h1>
      <div className="grid-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="user-image" />
            <h2><strong>Name: </strong>{`${user.firstName} ${user.lastName}`}</h2>
            <p> <strong>Age: </strong>{user.age}</p>
            <p><strong>Email: </strong> {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
