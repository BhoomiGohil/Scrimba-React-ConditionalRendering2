import React from "react";

export default function MainContent() {
  const isGoingOut = true; // Defining a constant to determine if going out

  return (
    <div className="state">
      {/* Displaying the question to the user */}
      <h1 className="state--title">Do I feel like going out tonight?</h1>

      <div className="state--value">
        {/* Conditionally rendering "Yes" or "No" based on the isGoingOut value */}
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
