import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Components.css";
import { useOutsideClick } from "@chakra-ui/react";

const Navigation = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const buttonRef = useRef("");
  useOutsideClick({
    ref: buttonRef,
    handler: () => setDropDownOpen(false),
  });
  return (
    <div
      className="container-fluid"
      style={{ padding: "unset", width: "100vw" }}
    >
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setDropDownOpen(!dropDownOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            dropDownOpen ? "show" : ""
          }`}
          id="navbarTogglerDemo01"
        >
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <button
                ref={buttonRef}
                onClick={() => setDropDownOpen(!dropDownOpen)}
                className="btn btn-dark nav-link dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Select Project
              </button>
              <div
                className={`dropdown-menu ${dropDownOpen ? "show" : ""}`}
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" to="/todo">
                  Todo
                </Link>
                <Link className="dropdown-item" to="/bmiCalculator">
                  BMI Calculator
                </Link>
              </div>
              
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navigation;
