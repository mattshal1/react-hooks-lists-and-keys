import React from "react";

function ColorItem({ color }) {
  return (
    <li style={{ color }} key={color}>
      {color}
    </li>
  ); 
}

export default function ColorList() {
  const colors = ["red", "green", "blue"];

  const colorElements = colors.map(color => {
    return <ColorItem color={color} />;  
  });

  return (
    <div>
      <h1>Colors</h1>
      <ul>{colorElements}</ul>
    </div>
  );
}