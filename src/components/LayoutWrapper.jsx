import React from "react";
import { Link } from "react-router-dom";

export default function LayoutSimple({ children }) {
  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <Link className=" btn btn-outline-primary mr-3 btn-lg" to="/marvel-api-react-task1">
          Home
        </Link>
        <Link className=" btn btn-outline-info btn-lg " to="/marvel-api-react-task1/characters">
          Go to Characters List
        </Link>
      </div>
      {children}
    </>
  );
}
