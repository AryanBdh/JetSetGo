import React from "react";
import Header from "../container/Header";
import { Link } from "react-router-dom";
import img from "../images/beach.jpg";
import img1 from "../images/sunset.jpg";
import img2 from "../images/town.jpg";
import img3 from "../images/medal.png";
import "../scss/style.css";

function HomeComponent() {
  const circle = {
    width: "1587.123px",
    height: "1744.212px",
    // overflow: "hidden",
    // transform: "rotate(200.492deg)",
    borderRadius: "1787.123px",
    background: "#8EE7ED",
    // mixBlendMode: "multiply",
    marginLeft: "700px",
    marginTop: "-1150px",
    position: "absolute",
    zIndex: "-1",
  };

  const image = {
    position: "absolute",
    left: "15%",
    top: "66%",
  };
  const image1 = {
    position: "absolute",
    left: "25%",
    top: "72%",
  };
  const image2 = {
    position: "absolute",
    left: "35%",
    top: "78%",
  };
  const style={
    position: "relative",
    overflow: "hidden",
    display: "grid",
    height: "auto",
  }
  return (
    <>
      <Header />
      <div style={{ overflow: "hidden", width: "100%", display:"grid" }}>
        <div className="background-design" style={circle}>
          <div className="Image" style={image}>
            <img src={img1} alt="" width={"200px"} height={"300px"} />
          </div>
          <div className="Image1" style={image1}>
            <img src={img} alt="" width={"200px"} />
          </div>
          <div className="Image2" style={image2}>
            <img src={img2} alt="" width={"200px"} />
          </div>
        </div>
        <div className="heading">
          <h1>Explore the world, </h1>
          <h1>One Click At A Time! </h1>
          <p>
            With the help of our extensive travel website, which will direct you
            to your next excursion, you may set out on amazing adventures and
            visit stunning locations.
          </p>
          <div className="search-location">
            <input
              type="text"
              placeholder="Location"
              className="search-input"
            />
            <input
              type="number"
              placeholder="No. of People"
              className="search-input"
            />
            <input
              type="number"
              placeholder="Distance (in km)"
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
        </div>
        <div className="topics">
          <div className="list">
            <Link to="/">Attractions</Link>
          </div>
          <div className="list">
            <Link to="/">Car Rental</Link>
          </div>
          <div className="list">
            <Link to="/">Stays</Link>
          </div>
        </div>
        <div className="explore">
          <p>Explore</p>
        </div>
        <div className="feature">
          <h1>
            Our Featured Destination <img src={img3} alt="" />
          </h1>
        </div>
        <div className="featured-list">
          <div className="featured">1</div>
          <div className="featured">2</div>
          <div className="featured">2</div>
          <div className="featured">2</div>
          <div className="featured">2</div>
          <div className="featured">2</div>
        </div>
      </div>
    </>
  );
}

export default HomeComponent;
