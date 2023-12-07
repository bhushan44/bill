import React from "react";
import Button from "./Button";

export default function Friendslist({
  friend,
  onclick,
  isshow1,
  selectedfriend,
  onselection,
}) {
  let isselected = selectedfriend?.id === friend.id;
  return (
    <div
      className={`hov ${isselected ? "back" : " "}`}
      style={{ display: "flex", padding: "5px", gap: "20px" }}
    >
      <img src={friend.image} alt="bhushan"></img>
      {friend.balance < 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // position: "absolute",
            // marginRight: "200px",
            justifyContent: "center",
          }}
        >
          <span>{friend.name}</span>
          <span style={{ color: "red" }}>
            {" "}
            you owes{friend.name} ${Math.abs(friend.balance)}
          </span>
        </div>
      )}

      {friend.balance > 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // marginTop: "10px",
            justifyContent: "center",
          }}
        >
          <span>{friend.name}</span>
          <span style={{ color: "green" }}>
            {" "}
            {friend.name} owes you ${friend.balance}
          </span>
        </div>
      )}
      {friend.balance === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span>{friend.name}</span>
          <span> you and your friend are even</span>
        </div>
      )}
      <div
        style={{
          position: "absolute",
          marginLeft: "350px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "50px",
        }}
      >
        <Button onclick={() => onselection(friend)}>
          {isselected ? "close" : "select"}
        </Button>
      </div>
    </div>
  );
}
