import React, { useState } from "react";

const Button = ({bgC, onClick, buttonText,icon,children,customStyles}) => {
  const [isHover, setIsHover ] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const style = {
    backgroundColor: isHover? "green" : `${bgC}`,
    color: isHover ? 'DarkBlack' : 'black',
    margin: "10px",
    padding: icon ? "15px 15px":"10px 20px",
    border: "0px",
    fontSize: icon? "20px": null,
    borderRadius: icon ? "100px":"5px",
    cursor: "pointer",
    
  };
  //    console.log(window.addEventListener());

  return (
    <button
      style={{style, customStyles}}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {icon && <i className={icon}></i>}
      {buttonText && buttonText}
      {children && children}
    </button>
  );
};

export default Button;
