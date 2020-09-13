import React from "react";
import PanelRight from "./PanelRight";
import PanelLeft from "./PanelLeft";
import TypeCity from "./TypeCity";

export default function FormMainHtml() {
  return (
    <div className="card-bodyfirstbox border 1px solid" color="#dee2e6">
      <TypeCity city="London" />

      <div>
        <div className="allHeading" />

        <PanelRight />
        <PanelLeft />
        <form>
          <div className="card-group" />
        </form>
      </div>
    </div>
  );
}
