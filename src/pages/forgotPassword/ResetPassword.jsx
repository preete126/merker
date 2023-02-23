import React, { Component, useRef, useState } from "react";
import { GlobalContext } from "../../Provider/GlobalProvider";
import { useContext } from "react";
import Alert from "../../components/Alert";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/Auth.css";
import Sidebar from "../../components/authDefault";
import DefaultLayout from "../../Layout/DefaultLayout";

const ResetPassword = () => {
  const navigate = useNavigate(null);
  let { setEmail, email } = useContext(GlobalContext);
  const emailRef = useRef(null);

  const verify = (ev) => {
    ev.preventDefault();
    email = emailRef.current.value;
    setEmail(email);
    navigate("/otp");
  };

  return (
    <>
      <main
        className=" animate__animated animate__fadeIn"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div
          className=" w-100 d-flex flex-column flex-lg-row"
          style={{ height: "100vh" }}
        >
          <div className=" w-100 w-lg-50 p-3 p-sm-5 ">
            <main>
              <main className=" m-auto ">
                <div className="policy mb-5 pe-sm-4 text-center text-sm-end pb-5 ">
                  Return to <Link to={"/login"}>Sign in</Link>
                </div>
                <h5 className="ms-sm-4 text-center text-sm-start pb-4 fs-1">
                  Forgot password?
                </h5>
                <form onSubmit={verify} className="ms-sm-4">
                  <p className="pe-5 text-dark">
                    Enter the email address associated with your account.
                  </p>

                  <div className="mb-3">
                    <label className="form-label TextForm">
                      Email address *
                    </label>
                    <input
                      required
                      type="email"
                      ref={emailRef}
                      placeholder="name@example.com"
                      className={`form-control`}
                    />
                  </div>

                  <button type="submit" className="btnForm mt-3 w-100 fs-5">
                    Continue
                  </button>
                </form>
              </main>
            </main>
          </div>
          <Sidebar
            info={
              "Don't worry, We are here to  help you recover your password."
            }
          />
        </div>
      </main>
    </>
  );
};

export default ResetPassword;
