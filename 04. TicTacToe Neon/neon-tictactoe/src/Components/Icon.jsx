import React from "react";
import { FaTimes, FaRegCircle } from "react-icons/fa";

export default function Icon({ icon_name }) {
  switch (icon_name) {
    case "circle":
      return <FaRegCircle className="icon" />;
    case "cross":
      return <FaTimes className="icon" />;
    default:
      return <></>;
  }
}
