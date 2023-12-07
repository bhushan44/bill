import React, { useState } from "react";
import Friends from "./Friends";
import Addfriend from "./Addfriend";
import Button from "./Button";
import Splitbill from "./Splitbill";
import "./Main.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function Main() {
  const [isshow, setshow] = useState(false);
  const [friends, setfriends] = useState(initialFriends);
  //   const [isshow1, setshow1] = useState(false);
  const [selectedfriend, setselectedfriend] = useState(null);
  function onhandlesplit(value) {
    setfriends((friends) =>
      friends.map((friend) =>
        selectedfriend?.id === friend.id
          ? { ...friend, balance: selectedfriend.balance + value }
          : friend
      )
    );
    // setselectedfriend(null);
    console.log(friends);
  }

  function hanndleselection(friend) {
    setselectedfriend((cur) => (cur?.id === friend.id ? null : friend));
    setshow(false);
  }

  function onshow() {
    setshow((isshow) => !isshow);
  }
  //   function onshow1() {
  //     setshow1((isshow1) => !isshow1);
  //   }
  //   console.log(friends);
  return (
    <div className="main">
      <div className="sidebar">
        <Friends
          className="friends"
          friends={friends}
          setfriends={setfriends}
          onclick={onshow}
          isshow1={isshow}
          selectedfriend={selectedfriend}
          onselection={hanndleselection}
        ></Friends>

        {isshow && (
          <Addfriend friends={friends} setfriends={setfriends}></Addfriend>
        )}
        <Button onclick={onshow}>{isshow ? "close" : "Addfriend"}</Button>
      </div>
      <div className="sidebar1">
        {selectedfriend && (
          <Splitbill
            className="splitbill"
            friends={friends}
            selectedfriend={selectedfriend}
            setfriends={setfriends}
            onhandlesplit={onhandlesplit}
          ></Splitbill>
        )}
        {/* <Splitbill></Splitbill> */}
      </div>
    </div>
  );
}
