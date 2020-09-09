import React from "react";

export default function () {
  let HeadingData = { city: "London, Uk" };
  return (
    <div id="allHeading">
      <h1>
        {HeadingData.city}
        <div className="fas fa-map-marker-alt"> </div>
      </h1>
    </div>
  );
}
