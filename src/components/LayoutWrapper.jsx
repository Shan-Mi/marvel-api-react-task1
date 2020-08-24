import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function LayoutSimple({ children }) {
  return (
    <>
      <div
        className="d-flex justify-content-center mt-4"
        style={{ position: "sticky", top: 0, zIndex: 1 }}
      >
        <Link className=" btn btn-outline-primary mr-3 btn-lg" to="/">
          Home
        </Link>
        <Link className=" btn btn-outline-info btn-lg " to="/characters">
          Go to Characters List
        </Link>
      </div>
      {children}
    </>
  );
}
