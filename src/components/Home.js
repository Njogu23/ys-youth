import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContext';

const Home = () => {
  const navigate = useNavigate();
  const authToken = useContext(MyContext);

  const handleLogout = () => {
    sessionStorage.removeItem(authToken);
    navigate('/sign-in');
  };

  return (
    <div>
      <h1>Welcome to The Ysdom!!</h1>
      <div>
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default Home;