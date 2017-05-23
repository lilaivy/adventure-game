import React from 'react';

function UserStats({ user }) {

  return (
    <div className="user-block">
      <p>Player: {user.name}</p>
      <p>Items: {user.items}</p>
      <p>Teabuzz: {user.teaBuzz} / 100</p>
    </div>
  );
}

export default UserStats;