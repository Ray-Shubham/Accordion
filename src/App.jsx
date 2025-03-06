import React, { Children } from "react";
import faqs from "../data";
import { Accordion } from "./Accordion";

function App() {
  return (
    <div className="container">
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
