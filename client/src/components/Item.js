import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { EllipsisOutlined } from "@ant-design/icons";

function Item() {
  return (
    <div className="item">
      <div className="icon">
        <EllipsisOutlined />
      </div>
      <div className="content">
        <div className="title">Learn graphql</div>
        <div className="description">learn graphql with the MERN Stack</div>
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
