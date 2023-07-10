import React from "react";
import FadeLoader from "react-spinners/FadeLoader"

function Loadingani() {
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
        <FadeLoader
          color="#FF9494"
          height={30}
          width={10}
          radius={8}
          margin={8}
        />
      </div>
    </div>
  );
}

export default Loadingani;