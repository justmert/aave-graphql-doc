import React from "react";

export default function ContractBlock(props) {
  return (
    <div style={{ marginBottom: "4.0em" }}>
      <p style={{ marginBottom: "0.6em" }}>{props.description}</p>
      <p><strong>Github: </strong>{props.github}</p>
      <p><strong>Address: </strong>{props.address}</p>
    <p><strong>ABI: </strong>{props.abi}</p>
    </div>
  );
}
