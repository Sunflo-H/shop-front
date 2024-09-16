import axios from "axios";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { alert_incompleteForm, alert_missMatch } from "../../alerts/warning";
import { alert_registerSuccess } from "../../alerts/success";
import { alert_registerError } from "../../alerts/error";
import Progress from "../../components/shop/signUp/Progress";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      let missingField;
      if (!username) missingField = "Username";
      else if (!password) missingField = "Password";

      alert_incompleteForm(missingField);
      return;
    }

    if (password !== confirmPassword) {
      alert_missMatch();
      return;
    }

    try {
      const response = await axios.post(process.env.REACT_APP_REGISTER_URL, {
        username,
        password,
      });

      const token = response.data.token;
      alert_registerSuccess().then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    } catch (err) {
      const errMassage = err.response.data.msg;
      alert_registerError(errMassage);
    }
  };

  return (
    <div className="shop-font flex items-center w-96 min-h-screen m-auto px-4 border-black ">
      <div className="max-w-md w-full space-y-8 ">
        <header>
          <h2 className="text-center text-3xl font-extrabold text-black ">
            Create your account
          </h2>
          <Progress />
        </header>
        <Outlet />

        <footer className="text-center">
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default SignUp;
