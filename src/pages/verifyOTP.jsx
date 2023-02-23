import React, { Component, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/Auth.css";
import Alert from "../components/Alert";
import httpClient from "./Services/httpClients";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const OTPCode = useRef({
    user_OTP: "",
  });

  const verifyOTP = async () => {
    try {
      const response = await httpClient.post(
        "/users/verifyOTP",
        OTPCode.current
      );
      console.log(OTPCode);
      setAlert(true);
      console.log(response);
      setAlertMessage(response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setAlert(true);
      setAlertMessage(error.response.data.message);
      //   setTimeout(() => {
      //     navigate("/signup");
      //   }, 2000);
    }
  };

  const onOTP = (e) => {
    e.preventDefault();
    {
      verifyOTP();
    }
  };
  const closeAlert = () => {
    setAlert(false);
  };

  return (
    <>
      <section
        className="bg-light px-2 px-sm-0 w-100 d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <main
          className="m-auto text-center otp_container"
          style={{ width: "360px", fontFamily: "'Poppins', sans-serif" }}
        >
          <div>
            <h2>Merkers</h2>{" "}
          </div>
          <div className="fs-3 mt-4">Two-Step Verification</div>
          <div className="my-4">
            <img
              src="https://media.istockphoto.com/id/1321309032/vector/change-password-linear-icon-password-reset-line-icon-circular-arrow-lock-reload-concept.jpg?s=612x612&w=0&k=20&c=t6WjVPvwwyJ8b3ttJjRisSuNKCUqRohNierufmezWn8="
              alt=""
              className="otpImage"
            />{" "}
          </div>
          <div className="text-dark" style={{ fontSize: "17px" }}>
            Enter the verification code we sent to
          </div>
          {/* <div className="fs-5 py-1">{email}</div> */}
          <form action="" onSubmit={onOTP}>
            <div className="text-center colorTextForm">
              {Alert && (
                <Alert closeAlert={closeAlert} alertMessage={alertMessage} />
              )}
            </div>
            <div
              className="otpForm d-flex mx-auto my-3"
              style={{ maxWidth: "fit-content" }}
            >
              <input
                type="text"
                className=""
                onChange={(e) => (OTPCode.current.user_OTP = e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btnForm my-4 p-3 w-100 rounded d-block fs-5"
            >
              Verify
            </button>
            <div className="policy text-dark">
              Didn't get the code? <a href="">Resend it</a>
            </div>
          </form>
        </main>
      </section>
    </>
  );
};

export default VerifyOTP;
