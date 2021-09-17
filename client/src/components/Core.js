import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import Item from "./Item";

function Core() {
  return (
    <div className="core">
      <form>
        <button type="submit">
          <PlusCircleOutlined />
        </button>
        <div className="inputs">
          <input type="text" placeholder="Title " />
          <input type="text" placeholder="Description " />
        </div>
      </form>

      <div className="todo_items">
        <Item />
      </div>
    </div>
  );
}

export default Core;
