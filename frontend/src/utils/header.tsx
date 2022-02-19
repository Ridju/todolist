import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/auth";

export default function Header() {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => navigate("/login"))
      .catch((error: any) => alert(`Something went wrong ${error}`));
  };
  return (
    <nav className='sticky top-0 z-50 flex w-full bg-gray-800 text-white'>
      <ul className='flex items-center justify-between w-full px-3 py-1'>
        <li className=''>
          <Link
            className='inline-block h-full w-full font-bold uppercase text-slate-300 hover:text-slate-400'
            to='/'>
            Todolist
          </Link>
        </li>
        <li>
          <button
            className='my-1 bg-teal-700 hover:bg-teal-800 text-slate-300 text-sm font-semibold py-1 px-2 rounded'
            onClick={() => handleLogout()}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
