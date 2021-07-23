import React, { useEffect } from 'react';
import './Logout.css';

function Logout() {
  const logout = () => {
    localStorage.removeItem("myToken");
    window.location.href = "/";
  };

  return (
    <div className='btnContOut'>
      <button onClick={logout}>LOG OUT</button>
    </div>
  )
}

export default Logout
