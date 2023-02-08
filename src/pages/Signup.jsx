import React, { Component, useRef, useState } from "react";
// import DefaultLayout from "../Layout/Defaultlayout";
import GlobalProvider from "../Provider/GlobalProvider";
import { GlobalContext } from "../Provider/GlobalProvider";
import { useContext } from "react";
import Alert from "../components/Alert";
import "../assets/Signup.css";
// import "animate.css";

const Signup = () => {
  const { Store, setStore, alert, setalert, alertMessage, setalertMessage } =
    useContext(GlobalContext);

  //hooks
  const createAcc = useRef({
    firstName: "",
    lastName: "",
    email: "",
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
      createAcc.current.password
    ) {
      setalert(true);
      setalertMessage("email must include @");
    } else if (
      createAcc.current.email.includes("@") &&
      createAcc.current.firstName &&
      createAcc.current.lastName &&
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
    <section>
      <main className="m-5">
        <div className="loginDiv">
          <div className="divWithin">
            <div className="text-center ">
              <h5 className="colorRandom">Create Account</h5>
            </div>
            <main>
              <main className=" m-auto">
                <form
                  onSubmit={SubmitUser}
                  className="formColor p-4 shadow-lg m-auto"
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
                      className={`form-control  inputStyle`}
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
                      className={`form-control  inputStyle`}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label TextForm">BVN *</label>
                    <input
                      required
                      type="password"
                      onChange={(e) =>
                        (createAcc.current.password = e.target.value)
                      }
                      className={`form-control outline-warning inputStyle`}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label TextForm">
                      Email address *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="name@example.com"
                      onChange={(e) =>
                        (createAcc.current.email = e.target.value)
                      }
                      className={`form-control inputStyle`}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label TextForm">Password *</label>{" "}
                    <span className="passwordComment">password (>) 7</span>
                    <input
                      required
                      type="password"
                      onChange={(e) =>
                        (createAcc.current.password = e.target.value)
                      }
                      className={`form-control outline-warning inputStyle`}
                    />
                  </div>
                  <button type="submit" className="btnForm w-50">
                    Submit
                  </button>
                </form>
              </main>
              <main></main>
            </main>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Signup;
