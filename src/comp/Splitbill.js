import React from "react";
import Button from "./Button";
import { useState } from "react";
export default function Splitbill({
  friends,
  selectedfriend,
  setfriends,
  onhandlesplit,
}) {
  const [bill, setbill] = useState("");
  const [userexp, setuserexp] = useState("");
  const [select, setselected] = useState("user");

  // setfriends((friends) =>
  //   friends.map((friend) =>
  //     friend.id === selectedfriend.id
  //       ? { ...friend, balance: balance }
  //       : friend
  //   )
  // );
  // console.log(balance);
  function onform(e) {
    e.preventDefault();
    onhandlesplit(select === "user" ? usrerfriend : -userexp);
    // setselectedfriend(null);
  }
  let usrerfriend = bill ? bill - userexp : "";
  return (
    <div className="splitbill">
      <h1> SPLIT A BILL WITH {selectedfriend.name}</h1>
      <form onSubmit={(e) => onform(e)}>
        <label>bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setbill(e.target.value)}
        ></input>
        <label>your expenses</label>
        <input
          type="text"
          value={userexp}
          onChange={(e) =>
            setuserexp(
              Number(e.target.value) > bill ? userexp : Number(e.target.value)
            )
          }
        ></input>
        <label>{selectedfriend.name} expenses</label>
        <input type="text" value={usrerfriend}></input>
        <label>whose is paying the bill</label>
        <select value={select} onChange={(e) => setselected(e.target.value)}>
          <option value="user">you</option>
          <option value={selectedfriend.name}>{selectedfriend.name}</option>
        </select>
        <Button onclick={onhandlesplit}>splitbill</Button>
      </form>
    </div>
  );
}
