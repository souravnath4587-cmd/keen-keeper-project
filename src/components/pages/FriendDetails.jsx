import React from "react";
import { useLoaderData, useParams } from "react-router";
import LeftCard from "../ui/LeftCard";
import RightCard from "../ui/RightCard";

const FriendDetails = () => {
  const friendDetails = useLoaderData();
  const { id } = useParams();

  const expectedFriend = friendDetails.find(
    (friend) => friend.id === parseInt(id),
  );

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-20">
      <LeftCard expectedFriend={expectedFriend} />
      <RightCard expectedFriend={expectedFriend} />
    </div>
  );
};

export default FriendDetails;
