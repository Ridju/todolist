import React, { useState } from "react";
import { useRegisterMutation } from "./authApi";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const style = {
  container:
    "block p-6 rounded-lg shadow-lg bg-gray-800 max-w-sm border border-gray-800",
  input:
    "shadow appearance-none bg-gray-800 outline-none border border-slate-500 " +
    "rounded w-full py-2 px-3 text-slate-300 " +
    "leading-tight focus:outline-none focus:border-teal-700 focus:shadow-outline",
  label: "block text-sm font-bold mb-2 text-slate-500",
  button:
    "bg-teal-700 hover:bg-teal-800 text-slate-300 font-bold py-2 px-4 rounded " +
    "w-full focus:outline-none focus:shadow-outline",
};

export default function LoginForm() {
  const [register] = useRegisterMutation();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleRegisterForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && email && password) {
      register({ username, email, password });
      navigate("/login");
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleRegisterForm}>
        <div className='mb-4'>
          <label htmlFor='Username' className={style.label}>
            Username
          </label>
          <input
            name='username'
            type='text'
            className={style.input}
            placeholder='Username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className='form-group mb-4'>
          <label htmlFor='password' className={style.label}>
            Email
          </label>
          <input
            name='Email'
            type='Email'
            className={style.input}
            placeholder='username@example.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='form-group mb-6'>
          <label htmlFor='password' className={style.label}>
            Password
          </label>
          <input
            name='password'
            type='password'
            className={style.input}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button type='submit' className={style.button}>
          Register
        </button>
      </form>
      <div className='flex justify-center items-center mt-4 text-slate-300'>
        <p>
          Already have an account? Login{" "}
          <Link
            to='/login'
            className='font-bold text-teal-700 hover:text-teal-800'>
            here
          </Link>
        </p>
      </div>
    </div>
  );
}
