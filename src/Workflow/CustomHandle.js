import { Handle } from "@xyflow/react";
import React from "react";

export default function CustomHandle(props) {
  return (
    <Handle
      style={{
        width: 8,
        height: 8,
        background: "white",
        border: "2px solid black",
      }}
      {...props}
    />
  );
}