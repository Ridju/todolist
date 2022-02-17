import React from "react";
import { useNavigate } from "react-router";
import { useLogoutMutation } from "../features/auth";

export default function HomePage() {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => navigate("/login"))
      .catch((error: any) => alert(`Something went wrong ${error}`));
  };

  return (
    <div className='text-white'>
      HomePage
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}
