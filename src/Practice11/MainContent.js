import React from "react";

export default function MainContent() {
  const isGoingOut = true;
  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value">
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
