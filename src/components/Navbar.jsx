import { Link } from "react-router-dom";
import React from "react";
import { Component, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../assets/styles/Navbar.css";

const Navbar = () => {
  //hooks
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isMobile, setisMobile] = useState(false);
  //   const { theme, count, setTheme, Cart, AddToCart } = useContext(themeContext);

  return (
    <nav className="navbar navBarMain p-2 fixed-top">
      <div className="Logo">
        {/* links */}
        <Link to={"/"} className=" link-light text-decoration-none">
          <h2>Merker</h2>
        </Link>
      </div>

      <div className=" navRight d-none d-md-block ">
        <form className="d-flex" role="search">
          <Link
            to={"/"}
            className="btn btn-link link-dark text-decoration-none text-warning"
          >
            <button className="btnLog" type="submit">
              <span>
                <i className="bi bi-box-arrow-in-right me-2"></i>{" "}
              </span>
              Why Merker?
            </button>{" "}
          </Link>
          <Link
            to={"/"}
            className="btn btn-link link-dark text-decoration-none text-warning"
          >
            <button className="btnLog" type="submit">
              <span>
                <i className="bi bi-person-check me-2"></i>
              </span>
              About us
            </button>
          </Link>
          <Link
            to={"/"}
            className="btn btn-link link-dark text-decoration-none text-warning"
          >
            <button className="btnLog" type="submit">
              <span>
                <i className="bi bi-person-check me-2"></i>
              </span>
              Begin your Journey!
            </button>
          </Link>
        </form>
      </div>
      <div className=" navRight d-none d-md-block ">
        <form className="d-flex" role="search">
          <Link
            to={"/login"}
            className="btn btn-link link-dark text-decoration-none text-warning"
          >
            <button className="btnLog" type="submit">
              <span>
                <i className="bi bi-box-arrow-in-right me-2"></i>{" "}
              </span>
              Log In
            </button>{" "}
          </Link>
          <Link
            to={"/signup"}
            className="btn btn-link link-dark text-decoration-none text-warning"
          >
            <button className="btnLog" type="submit">
              <span>
                <i className="bi bi-person-check me-2"></i>
              </span>
              Sign Up
            </button>
          </Link>
        </form>
      </div>

      {/* /Canvas section */}
      <div className="d-block d-md-none">
        <FaBars className="fs-3 text-light toggle" onClick={handleShow} />
      </div>

      <div className="d-block d-md-none">
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton className="canvasHeader p-2">
            <Offcanvas.Title className="">
              {" "}
              <h2 className="text-light ms-3">Links</h2>{" "}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className={`bg-light`}>
            <ul
              class="list-group list-group-flush"
              className={`bg-light ms-auto`}
            >
              <li className="list-group-item">
                <Link to={"/"} className=" TextForm text-decoration-none">
                  <h5>Home</h5>
                </Link>
              </li>
              <li className="list-group-item">
                <Link to={"/"} className=" TextForm text-decoration-none ">
                  <h5>Products</h5>
                </Link>
              </li>
              <li className="list-group-item">
                <Link to={"/login"} className=" TextForm text-decoration-none">
                  <h5>Login</h5>
                </Link>
              </li>
              <li className="list-group-item">
                <Link to={"/signup"} className=" TextForm text-decoration-none">
                  <h5>Sign Up</h5>
                </Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};

export default Navbar;
