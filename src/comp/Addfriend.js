import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function Addfriend({ friends, setfriends }) {
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleAdd() {
    let list = { id: crypto.randomUUID, name, image, balance: 5 };
    setfriends([...friends, list]);
    console.log(friends);
  }
  return (
    <div className="addfriend">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>enter name</label>
        {/* <br></br> */}
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
        {/* <br></br> */}
        <label>enter image url</label>
        {/* <br></br> */}
        <input
          type="text"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        ></input>
        <Button onclick={handleAdd}>Add</Button>
      </form>
    </div>
  );
}
