import React from "react";

export const Meme = ({ template, onClick }) => {
  return (
    <div className="component">
      <img
        style={{ width: 500 }}
        key={template.id}
        src={template.url}
        alt={template.name}
        onClick={onClick}
      />
    </div>
  );
};
