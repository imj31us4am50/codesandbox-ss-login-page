import "./styles2.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Title from "/formcomponents/Title.js";
import Inputs from "/formcomponents/Inputs.js";
import Checkbox from "/formcomponents/Checkbox.js";
import Button from "/formcomponents/Button.js";
import ToSignIn from "/formcomponents/ToSignIn.js";

export default function App2() {
  return (
    <div className="container-fluid ozzo mx-auto p-5">
      <Title />
      <form>
        <Inputs />
        <Checkbox />
        <Button />
      </form>
      <ToSignIn />
    </div>
  );
}
