import React from "react";
import { Link } from "react-router-dom";

export default function LayoutSimple({ children }) {
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <Link className=" btn btn-outline-primary mr-3 btn-lg" to="/">
          Home
        </Link>
        <Link className=" btn btn-outline-info btn-lg mr-3" to="/characters">
          Go to Chars List
        </Link>

      </div>
      {children}
    </>
  );
}
