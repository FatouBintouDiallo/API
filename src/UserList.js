// UserList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  return (
    <div style={{backgroundColor:"gray"}}>
      <h1 style={{}}>User List</h1>
      <ul>
        {Users.map(user => (
           <div style={{listStyle:"none",}}>
          <li key={user.id}>{user.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
