import React from "react";
import Friendslist from "./Friendslist";
export default function Friends({
  friends,
  setfriends,
  onclick,
  isshow1,
  selectedfriend,
  onselection,
}) {
  return (
    <div className="friends">
      {friends.map((friend) => (
        <Friendslist
          friend={friend}
          onclick={onclick}
          isshow1={isshow1}
          selectedfriend={selectedfriend}
          onselection={onselection}
        ></Friendslist>
      ))}
    </div>
  );
}
