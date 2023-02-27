import React from 'react';

const UserList = ({ user }) => {
  return (
    <div>
      <h2>{user.login}'s Repositories:</h2>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="200" height="200" />
    </div>
  );
};

export default UserList;
