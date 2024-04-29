import React from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";

function Header() {
  const aStyle = {
    width: "100%",
    height: "76px",
    backgroundColor: "transparent",
    display: "grid",
    gridTemplateColumns: "1fr 5fr 2fr",
    zIndex: "-10",
    
    
  };

  const menuStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
    gap: "100px",
};

const leftMenuStyle = {
    justifyContent: "flex-start",
    paddingLeft: "120px",
};
const rightMenuStyle = {
    justifyContent: "flex-end",
    paddingRight: "65px",
  };

  const menuListStyle = {
    textDecoration: "none",
    color: "#ff9f1c",
    fontSize: "18px",
  };

  const register={
    backgroundColor: "#ff9f1c",
    color: "white",
    padding:"10px",
    borderRadius:"10px",    
  }

  const loginStyle = {
    color: "white", // Change the color of the "Login" link to white
  };

  const logo = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingLeft: "65px",
  };
  return (
    <div className="header" style={aStyle}>
      <div className="logo" style={logo}>
        <Link to="/">
          <img src={`${img}`} height="37px" />
        </Link>
      </div>

      <div className="menu" style={{ ...menuStyle, ...leftMenuStyle }}>
        <Link to="/" style={menuListStyle}>
          Home
        </Link>
        <Link to="/about" style={menuListStyle}>
          About
        </Link>
        <Link to="/tours" style={menuListStyle}>
          Tours
        </Link>
      </div>
      <div className="menu" style={{ ...menuStyle, ...rightMenuStyle }}>
        <Link to="/login" style={{...menuListStyle, ...loginStyle}} className="Login">
          Login
        </Link>
        <Link to="/register" style={{...menuListStyle, ...register}} className="register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Header;
