import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import Searchbox from "./SearchBox";
import useApi from "../useApi";

const Nav = () => {
  return (
    <div className="navWrapper">
      <Link className="nav" to="/">
        <h2 style={{ marginTop: "0", marginBottom: "0" }}>
          {"Flick - O - Meter"}
        </h2>
      </Link>
    </div>
  );
};

export default Nav;
