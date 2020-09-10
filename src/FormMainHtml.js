import React from "react";
import PanelRight from "./PanelRight";
import PanelLeft from "./PanelLeft";
import Heading from "./Heading";

export default function () {
  return (
    <div className="card-bodyfirstbox border 1px solid" color="#dee2e6">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeHolder="Type a city.."
              autoFocus="on"
              autoComplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="row-2">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm w-100"
            />
          </div>
          <div className="row-2">
            <input
              type="submit"
              value="current"
              className="form-control btn btn-success shadow-sm w-100"
            />
          </div>
        </div>
      </form>
      <div>
        <Heading />
        <PanelRight />
        <PanelLeft />
        <form>
          <div className="card-group" />
        </form>
      </div>
    </div>
  );
}
