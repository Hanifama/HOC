import React, { useState } from "react";

function withCalculate(OriginalComponent) {
  return (props) => {
    const [nomor, setNomor] = useState(0);

    const handleNomor = () => {
      setNomor(nomor + props.nilai);
    };

    return (
      <OriginalComponent nomor={nomor} handleNomor={handleNomor} {...props} />
    );
  };
}

export default withCalculate;
