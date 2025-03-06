import React, { useState } from "react";
import { AccordionItem } from "./AccordionItem";

export function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(false);
  return (
    <div>
      {data.map((el, num) => {
        return (
          <AccordionItem title={el.title} key={num} curOpen={curOpen} setCurOpen={setCurOpen} num={num} >
            {el.text}
          </AccordionItem>
        );
      })}
    </div>
  );
}
