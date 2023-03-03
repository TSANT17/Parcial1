import React from "react";
import { useState } from "react";

export const Categorias = () => {
  const [categories, setCategories] = useState(["First category"]);
  const [category, setCategory] = useState("");

  const addCategory = () => {
    setCategories((list) => [...list, category]);
    setCategory("");
  };
  const onSetCategory = (evt) => {
    setCategory(evt.target.value);
  };

  function ListItem(props) {
    return <li>{props.value}</li>;
  }
  const listItems = categories.map((category) => (
    <ListItem key={category.toString()} />
  ));
  return <ul>{listItems}</ul>;

  return (
    <>
      <h1>Productos Tienda</h1>
      <input
        type="text"
        value={category}
        onChange={(event) => onSetCategory(event)}
      />
      <button onClick={() => addCategory()}>Añadir</button>
      <ol>
        {categories.map((category, key) => {
          return <li key={key}>{category}</li>;
        })}
      </ol>

      <button onClick={() => addLista()}>Listar</button>
      <ol>
        {ListItem.map((category, key) => {
          return <li key={key}>{category}</li>;
        })}
      </ol>
    </>
  );
};
