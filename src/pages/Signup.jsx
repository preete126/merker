import React, { Component, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import "../assets/styles/Auth.css";
import Sidebar from "../components/authDefault";
import httpClient from "./Services/httpClients";
// import "animate.css";

const Signup = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  //hooks
  const createAcc = useRef({
    firstName: "",
    lastName: "",
    email: "",
    bvn: "",
    password: "",
  });
  //function post
  const postUserDetails = async () => {
    try {
      const response = await httpClient.post(
        "/users/merkerUsers",
        createAcc.current
      );
      setAlert(true);
      console.log(response);
      setAlertMessage(response.data.message);
      navigate("/login");
    } catch (error) {
      setAlert(true);
      setAlertMessage(error.response.data.message);
    }
  };

  const SubmitUser = (e) => {
    e.preventDefault();
    if (
      !createAcc.current.email.includes("@") &&
      createAcc.current.firstName &&
      createAcc.current.lastName &&
      createAcc.current.bvn &&
      createAcc.current.password
    ) {
      setAlert(true);
      setAlertMessage("email must include @");
    } else if (
      createAcc.current.email.includes("@") &&
      createAcc.current.firstName &&
      createAcc.current.lastName &&
      createAcc.current.password &&
      createAcc.current.bvn.length < 10
    ) {
      setAlert(true);
      setAlertMessage("BVN must be 10 numbers");
    } else if (
      createAcc.current.email.includes("@") &&
      createAcc.current.firstName &&
      createAcc.current.lastName &&
      createAcc.current.bvn &&
      createAcc.current.password.length < 8
    ) {
      setAlert(true);
      setAlertMessage("password must be at least 8 characters");
    } else {
      postUserDetails();
      // console.log(createAcc.current);
    }
  };

  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <>
      <main className="" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="loginDiv w-100 d-flex flex-column flex-lg-row">
          <div className="divWithin w-100 w-lg-50 p-3 p-sm-5 ">
            <div className="policy mb-5 pe-sm-4 text-center text-sm-end pb-5 ">
              Already a member? <Link to={"/login"}>Sign in now</Link>
            </div>
            <div className="ms-sm-4 text-center text-sm-start">
              <h5 className="colorRandom">Create Account</h5>
            </div>
            <main>
              <main className=" m-auto">
                <form onSubmit={SubmitUser} className=" p-sm-4 ">
                  <div className="mb-3">
                    <div className="text-center colorTextForm">
                      {Alert && (
                        <Alert
                          closeAlert={closeAlert}
                          alertMessage={alertMessage}
                        />
                      )}
                    </div>
                    <label className="form-label TextForm">First Name *</label>
                    <input
                      required
                      type="text"
                      onChange={(e) =>
                        (createAcc.current.firstName = e.target.value)
                      }
                      className={`form-control`}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label TextForm">Last Name *</label>
                    <input
                      required
                      type="text"
                      onChange={(e) =>
                        (createAcc.current.lastName = e.target.value)
                      }
                      className={`form-control`}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label TextForm">
                      Email address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@example.com"
                      onChange={(e) =>
                        (createAcc.current.email = e.target.value)
                      }
                      className={`form-control`}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label TextForm">BVN *</label>
                    <input
                      required
                      type="password"
                      onChange={(e) => (createAcc.current.bvn = e.target.value)}
                      className={`form-control outline-warnin`}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label TextForm">Password *</label>{" "}
                    <span className="passwordComment">
                      password more than 7
                    </span>
                    <input
                      required
                      type="password"
                      minLength={8}
                      onChange={(e) =>
                        (createAcc.current.password = e.target.value)
                      }
                      className={`form-control outline-warnin`}
                    />
                  </div>
                  <div className="policy d-flex gap-2 py-2">
                    <input type="checkbox" name="" id="" />
                    <div>
                      I agree to the <a href="#">Terms</a> and{" "}
                      <a href="#"> Private Policy</a>
                    </div>
                  </div>
                  <button type="submit" className="btnForm w-100 fs-5">
                    Sign up
                  </button>
                </form>
              </main>
              <main></main>
            </main>
          </div>
          <Sidebar
            info={"Join the largest Money lending community in the world."}
            height={"600px"}
          />
        </div>
      </main>
    </>
  );
};

export default Signup;
