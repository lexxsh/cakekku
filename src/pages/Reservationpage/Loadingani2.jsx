import React from "react";
import PacmanLoader from "react-spinners/PacmanLoader"

function Loadingani2() {
  return (
    <div class="contentWrap">
      <div
        style={{
          position: "fixed",
          top: "41%",
          left: "51%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <PacmanLoader color="#FF9494" 
                      size={50}/>
      </div>
    </div>
  );
}

export default Loadingani2;