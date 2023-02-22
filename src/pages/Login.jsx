import React, { Component, useRef, useState } from "react";
import { GlobalContext } from "../Provider/GlobalProvider";
import { useContext } from "react";
import Alert from "../components/Alert";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Auth.css";
import Sidebar from "../components/authDefault";
import httpClient from "./Services/httpClients";

const Login = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const createAcc = useRef({
    email: "",
    password: "",
  });

  const LoginUserDetails = async () => {
    try {
      const response = await httpClient.post("/users/login", createAcc.current);
      console.log(createAcc);
      setAlert(true);
      console.log(response);
      setAlertMessage(response.data.message);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setAlert(true);
      setAlertMessage(error.response.data.message);
      setTimeout(() => {
        navigate("/signup");
      }, 2000);
    }
  };

  const onlogin = (e) => {
    e.preventDefault();
    {
      LoginUserDetails();
    }
  };

  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <>
      <main
        className="mainLogin animate__animated animate__fadeIn"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className="loginDiv w-100 d-flex flex-column flex-lg-row"
          style={{ height: "100vh" }}
        >
          <div className="divWithin w-100 w-lg-50 p-3 p-sm-5 ">
            <main>
              <main className=" m-auto ">
                <div className="policy mb-5 pe-sm-4 text-center text-sm-end pb-5 ">
                  Not a member? <Link to={"/signup"}>Sign up now</Link>
                </div>
                <h5 className="ms-sm-2 text-center text-sm-start LoginTextTop colorRandom pb-3">
                  Sign In
                </h5>
                <form onSubmit={onlogin} className="">
                  <div className="text-center colorTextForm">
                    {alert && (
                      <Alert
                        closeAlert={closeAlert}
                        alertMessage={alertMessage}
                      />
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      required
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) =>
                        (createAcc.current.email = e.target.value)
                      }
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>

                  <div className="form-floating">
                    <input
                      type="password"
                      required
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      onChange={(e) =>
                        (createAcc.current.password = e.target.value)
                      }
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="d-flex justify-content-between  flex-column flex-sm-row gap-3 gap-sm-0 my-4">
                    <div className="d-flex gap-2 align-items-center">
                      <input type="checkbox" name="" id="" />
                      <div>Remember me</div>
                    </div>
                    <Link
                      to={"/reset"}
                      className="text-decoration-none text-success"
                    >
                      <span className="">forgot passsword?</span>
                    </Link>
                  </div>
                  <button type="submit" className="btnForm mt-3 w-100 fs-5">
                    Sign in
                  </button>
                </form>
              </main>
            </main>
          </div>
          <Sidebar
            info={"Join the largest Money lending community in the world."}
            height={"400px"}
          />
        </div>
      </main>
    </>
  );
};

export default Login;
