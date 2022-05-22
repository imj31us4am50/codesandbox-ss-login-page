import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "/navbar/navbar.js";
import SignForm from "/formcomponents/App2.js";
import SideDescription from "/desccomponents/App3.js";
import Footer from "/footer/footer.js";

export default function App() {
  return (
    <div className="App m-0 p-0">
      <NavBar />
      <div className="d-flex container-of-desc-and-form pt-2 justify-content-center">
        <SideDescription />
        <SignForm />
      </div>
      <Footer />
    </div>
  );
}
