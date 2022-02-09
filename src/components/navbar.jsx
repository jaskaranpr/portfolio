import "./styles/navbar.css";
import { Button } from "./Button";
import { useState } from "react";
import nextIcon from "../assets/Icons/next.png";
export const Navbar = ({ color }) => {
  const styles = {
    color,
  };
  return (
    <nav id="navbar" style={styles}>
      <div className="nav-container">
        <div className="logo">Jaskaran</div>
        <ul>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <Button className={"resume-btn"}>Resume</Button>
      </div>
    </nav>
  );
};
