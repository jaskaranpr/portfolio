import { useState } from "react";
import nextIcon from "../assets/Icons/next.png";
export const Button = ({ styles, className, children }) => {
  const [btnHover, setBtnHover] = useState(false);
  function Line() {
    return <span className="line"></span>;
  }
  return (
    <button
      style={styles}
      onMouseEnter={() => setBtnHover(true)}
      onMouseLeave={() => setBtnHover(false)}
      className={className}
    >
      <a>{children}</a>
      <div className="btn-icon">
        {" "}
        {btnHover ? <Line /> : ""}{" "}
        <img
          className="icon"
          style={btnHover ? { marginLeft: "5px" } : {}}
          src={nextIcon}
          alt=""
        />
      </div>
    </button>
  );
};
