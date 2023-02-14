import React, { Component, useRef, useState } from "react";
import { Link} from "react-router-dom"
import { GlobalContext } from "../Provider/GlobalProvider";
import { useContext } from "react";
import Alert from "../components/Alert";
import "../assets/styles/Auth.css";
import Sidebar from "../components/authDefault";
// import "animate.css";

const Signup = () => {
  const { Store, setStore, alert, setalert, alertMessage, setalertMessage } =
    useContext(GlobalContext);

  //hooks
  const createAcc = useRef({
    firstName: "",
    lastName: "",
    email: "",
    bvn: "",
    password: "",
  });

  const SubmitUser = (e) => {
    e.preventDefault();
    let registeredUser = false;
    Store.map((store) => {
      //conditions
      if (store.email === createAcc.current.email) {
        return (registeredUser = true);
      }
    });
    if (registeredUser == true) {
      setalert(true);
      setalertMessage("user already exist, proceed to login");
    } else if (
      !createAcc.current.email.includes("@") &&
      createAcc.current.firstName &&
      createAcc.current.lastName &&
      createAcc.current.bvn &&
      createAcc.current.password
    ) {
      setalert(true);
      setalertMessage("email must include @");
    } else if (
      createAcc.current.email.includes("@") &&
      createAcc.current.firstName &&
      createAcc.current.lastName &&
      createAcc.current.password &&
      createAcc.current.bvn.length < 10
    ) {
      setalert(true);
      setalertMessage("BVN must be 10 numbers");
    } else if (
      createAcc.current.email.includes("@") &&
      createAcc.current.firstName &&
      createAcc.current.lastName &&
      createAcc.current.bvn &&
      createAcc.current.password.length < 8
    ) {
      setalert(true);
      setalertMessage("password must be at least 8 characters");
    } else {
      let newStore = [...Store, { ...createAcc.current }];
      setStore(newStore);
      localStorage.setItem("users", JSON.stringify(newStore));
      setalert(true);
      setalertMessage("Registered successfully");
      let input = document.getElementsByTagName("input");
      for (let index = 0; index < input.length; index++) {
        input[index].value = "";
      }
      console.log(createAcc.current);
    }
  };

  const closeAlert = () => {
    setalert(false);
  };

  return (
    <>
      <main className="" style={{fontFamily:"'Poppins', sans-serif"}}>
        <div className="loginDiv w-100 d-flex flex-column flex-lg-row">
          <div className="divWithin w-100 w-lg-50 p-3 p-sm-5 ">
            <div className="policy mb-5 pe-sm-4 text-center text-sm-end pb-5 " >
              Already a member? <Link to={"/login"}>Sign in now</Link>
            </div>
            <div className="ms-sm-4 text-center text-sm-start">
              <h5 className="colorRandom">Create Account</h5>
            </div>
            <main>
              <main className=" m-auto">
                <form
                  onSubmit={SubmitUser}
                  className=" p-sm-4 "
                >
                  <div className="mb-3">
                    <div className="text-center colorTextForm">
                      {alert && (
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
                    <div>I agree to the <a href="#">Terms</a> and <a href="#"> Private Policy</a></div>
                  </div>
                  <button type="submit" className="btnForm w-100 fs-5">
                    Sign up
                  </button>
                </form>
              </main>
              <main></main>
            </main>
          </div>
                <Sidebar info={"Join the largest Money lending community in the world."} height={"600px"}/>
        </div>
      </main>
    </>
  );
};

export default Signup;
