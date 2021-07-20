import React, { useEffect } from 'react';


function Logout() {
  const logout = () => {
    localStorage.removeItem("myToken");
  window.location.href = "/";
  };

  return (
    <div>
      <button onClick={logout}>LOG OUT</button>
    </div>
  )
}

export default Logout
