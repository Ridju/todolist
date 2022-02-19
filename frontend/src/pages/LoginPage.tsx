import React, { useEffect } from "react";
import { LoginForm } from "../features/auth";
import { useRefreshMutation } from "../features/auth";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/auth";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [refresh] = useRefreshMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const refreshToken = () => {
    refresh()
      .unwrap()
      .then((credentials: any) => {
        dispatch(setCredentials(credentials.access));
        setTimeout(() => {
          refreshToken();
        }, 1000 * 60 * 4); //4 min intervall
        navigate("/");
      })
      .catch((error: any) => {});
  };

  useEffect(() => {
    refreshToken();
    // eslint-disable-next-line
  }, []);

  return (
    <main className='w-full h-full flex justify-center items-center '>
      <LoginForm />
    </main>
  );
}
