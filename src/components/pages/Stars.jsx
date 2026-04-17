import React, { useContext } from "react";
import { FriendContactContext } from "../context/FriendContactProvider";

const Stars = () => {
  const { friendContact } = useContext(FriendContactContext);
  console.log(friendContact);

  return <div>This is starts page.</div>;
};

export default Stars;
