import React from "react";

const Card = ({title, children, bgC,customStyles}) => {
  const style={
    backgroundColor: `${bgC}`,
    maxWidth: "100%",
    minWidth: "200px",
    textAlign: 'center',
    margin: `10px`,
    padding: "10px",
  }
  return(
    <div style={{...style, ...customStyles}}>
    <h1>{title}</h1>
        {children}
    </div>
  );
};

export default Card;
