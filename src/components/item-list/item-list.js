import React from "react";
  
import "./item-list.css";

const ItemList = (props) => {
  const { data, onItemSelected, children: renderLabel } = props;
  
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <div className="list-group">{items}</div>;
};

export default ItemList;
