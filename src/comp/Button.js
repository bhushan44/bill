import React from "react";

export default function Button({ children, onclick }) {
  return (
    <div className="button">
      <button onClick={onclick}>{children}</button>
    </div>
  );
}
