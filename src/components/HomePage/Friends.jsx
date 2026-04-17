import React from "react";
import Friend from "../ui/Friend";

const Friends = ({ friends }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold my-8">Friends</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between items-center">
        {friends.map((friend) => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default Friends;
