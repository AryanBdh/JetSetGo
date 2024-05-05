import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../images/logo.png";
import prof from "../images/user.png";
import logout from "../images/log-out.png";
import API from "../API";


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

  const register = {
    backgroundColor: "#ff9f1c",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
  };

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

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  let token = localStorage.getItem("token") ?? "";
  const checkToken = () => {
    API.get("/login/token-verify", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.data.status) {
        setIsLogin(true);
        setIsLoading(false);
      } else {
        setIsLogin(false);
        setIsLoading(false);
      }

    }).catch(error => {

    });
  }

  const getProfile =()=>{
    API.get("/user/profile", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setUser(response.data);
      }).catch(error => {

    });
  }
  useEffect(() => {
    checkToken();
    getProfile();
  }, []);

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
        <Link
          to="/login"
          style={{ ...menuListStyle, ...loginStyle }}
          className="Login"
        >
          Login
        </Link>
        <Link
          to="/register"
          style={{ ...menuListStyle, ...register }}
          className="register"
        >
          Register
        </Link>
      </div>
      <div className="profile-container">
        <div className="portrait" onClick={()=>{setOpen(!open)}}>
          <img src={user.image} alt="" />
        </div>
        <div className={`profile-info ${open? 'active' : 'inactive'}`}>
          <h3>{user.name}</h3>
          <ul>
            <DropdownItem img={prof} text={"My Profile"}/>
            <DropdownItem img={logout} text={"Logout"} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}/>
      <Link to="/admin">{props.text}</Link>
    </li>
  );
}



export default Header;
