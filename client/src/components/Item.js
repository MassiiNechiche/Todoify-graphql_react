import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { EllipsisOutlined } from "@ant-design/icons";

function Item({ title, description }) {
  return (
    <div className="item">
      <div className="icon">
        <EllipsisOutlined />
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
      <div className="action">
        <div className="delete">
          <DeleteOutlined />
        </div>
      </div>
    </div>
  );
}

export default Item;
