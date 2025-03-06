import React from "react";

export function AccordionItem({ title, children, curOpen, setCurOpen, num }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    setCurOpen(isOpen ? null : num);
  }
  return (
    <div className={`header ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <div className="title">
        <h2>{title}</h2>
        <p className="icon">{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}
