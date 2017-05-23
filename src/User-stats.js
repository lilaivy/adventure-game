import React from 'react';

function UserStats({ user }) {

  return (
    <div className="user-block">
      <p>Player: {user.name}</p>
      <ul>Items: {user.items.map((item, i) => <li key={i}>{item.name}</li>)}   </ul>
      <p>Teabuzz: {user.teaBuzz} / 100</p>
    </div>
  );
}

export default UserStats;