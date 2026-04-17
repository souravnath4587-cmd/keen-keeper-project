import React, { Suspense } from "react";
import Friend from "../ui/Friend";

const Friends = ({ friends }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold my-8">Friends</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between items-center">
        {friends.map((friend) => {
          return (
            <Suspense
              fallback={
                <div className="flex justify-center items-center my-8">
                  <span className="loading loading-spinner text-success loading-xl"></span>
                </div>
              }
            >
              <Friend key={friend.id} friend={friend} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
