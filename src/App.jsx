import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Chat from "./Chat";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const username = prompt("Enter your username:");
    dispatch(login(username));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user}</h1>
          <button onClick={handleLogout}>Logout</button>
          <Chat />
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default App