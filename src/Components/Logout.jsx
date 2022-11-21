import React from 'react';

function logOut(){
    sessionStorage.clear();
}

const Logout = () => {
  return (
    <button onClick={logOut}>Logout</button>
  )
}

export default Logout;