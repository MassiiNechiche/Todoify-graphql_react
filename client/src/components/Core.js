import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import Item from "./Item";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST, DELETE_POST } from "../graphql/Mutation";
import { getAll } from "../graphql/Query";
import { useState } from "react";

function Core() {
  const { loading, error, data } = useQuery(getAll);
  const [createPost, { err }] = useMutation(CREATE_POST);
  const [deletePost, { errr }] = useMutation(DELETE_POST);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  if (loading) return "Loading";

  return (
    <div className="core">
      <form>
        <button type="submit">
          <PlusCircleOutlined />
        </button>
        <div className="inputs">
          <input
            type="text"
            placeholder="Title "
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description "
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>

      <div className="todo_items">
        {data.getAll.map((data) => (
          <Item title={data.title} description={data.description} />
        ))}
      </div>
    </div>
  );
}

export default Core;
