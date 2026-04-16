import React, { use } from "react";
import Friend from "../ui/Friend";
const friendsData = fetch("/friends.json").then((res) => res.json());

const Friends = () => {
  const friends = use(friendsData);

  return (
    <div>
      <h3 className="text-2xl font-bold my-8">Friends</h3>
      <div className="grid grid-cols-4 gap-4 justify-between items-center">
        {friends.map((friend) => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default Friends;
