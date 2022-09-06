import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { fetchApi } from '../../utils/fetchAPI';

const Users = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchApi('https://jsonplaceholder.typicode.com/users?_limit=4')
      .then((res) => {
        setUserList(res);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  let users = null;
  users =
    userList &&
    userList.map((user) => {
      return (
        <div
          key={user.id}
          style={{
            border: 'solid 2px #ccc',
            borderRadius: '5px',
            textAlign: 'left',
            padding: '1rem',
            flexGrow: '1',
          }}
        >
          <p>UserId: {user.id}</p>
          <h3>{user.name}</h3>
          <p>Phone: {user.phone}</p>
        </div>
      );
    });
  return (
    <div>
      <h2 style={{ color: ' #61dafb' }}>USERS | Loads data from API</h2>
      <p>Testing using Mock API</p>
      {error ? (
        <p>Unable to load Users. Try again</p>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyItems: 'center',
            alignItems: 'center',
            padding: '0 1rem',
          }}
        >
          {users}
        </div>
      )}
    </div>
  );
};

export default Users;
