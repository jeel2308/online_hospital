import React from "react";

function About(){
    const style = {
        backgroundColor : "#90caf9",
        boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
        color : "black",
        display : "inline-block",
        padding : "10px"
    }
    return (
      <>
          <h2>Developers</h2>
          <h3 style={style}>Jeel2308</h3>
          <h3 style={style}>Sarthik</h3>
          <h3 style={style}>Rushabh</h3>
      </>
    );
}

export default About;