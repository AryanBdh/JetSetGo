import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import API from "../../API";
import { Link } from 'react-router-dom';
import "../../scss/admin.css";

export default function AdminRouteMiddleware() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user,setUser] = useState({})
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

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  }


  return (
    <>
      {isLoading ? <h1>Loading...</h1> :
        <div>
          {isLogin ?
            <div className="admin-panel">
              <div className="top-header">
                <div className="container-box">
                  <div className="header-container">
                    <div className="companyname">
                      <h1>BCA News</h1>
                    </div>
                    <div className="logout-section">
                      <button onClick={logout}>Logout</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aside-bar">
                <div className="admin-profle">
                  <div className="admin-image">
                    <img src={user.image} alt="" />
                  </div>
                  <div className="admin-info">
                    <h1>{user.name}</h1>
                  </div>

                </div>
                <ul>
                  <li>
                    <Link to="/admin/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/admin/show-users">Users</Link>
                  </li>
                  <li>
                    <Link to="/admin/manage-category">Manage Category</Link>
                  </li>
                  <li>
                    <Link to="/admin/add-news">Add Travel Destination</Link>
                  </li>
                  <li>
                    <Link to="/admin/show-news">Show Travel Lists</Link>
                  </li>
                </ul>
              </div>
              <div className="main">
                <div className="container-box">
                  <Outlet />
                </div>
              </div>
            </div>
            :
            window.location.href = "/"
          }
        </div>
      }
    </>
  )

}
