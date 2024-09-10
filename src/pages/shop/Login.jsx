import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { alert_loginError } from "../../alerts/error";
import { setUser } from "../../slice/authSlice";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/userApi";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: async ({ email, password }) => login(email, password),
    onSuccess: (data) => {
      const { token, user } = data;
      localStorage.setItem("jwt", token);
      navigate("/");
      // dispatch(setUser(user));
    },
    onError: (err) => {
      alert_loginError("Email and password do not match");
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <div className="shop-font min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                name="email"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-black rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              onClick={(e) => handleLogin(e)}
            >
              Sign in
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?
                <Link to="/register" className="ml-1 font-bold hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
