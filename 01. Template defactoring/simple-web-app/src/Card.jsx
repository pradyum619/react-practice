import React from "react";

export default function Card({
  title = "Basketball",
  desc = "DESCRIPTION",
  imglink = "https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
}) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={imglink} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href="#" className="btn btn-success">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
