import React from "react";

const Tab = ({ friends }) => {
  const onTrack = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;

  return (
    <div className="flex flex-row justify-between items-center gap-4">
      <div className="p-2 md:p-10 text-center rounded-2xl bg-white md:w-1/5 shadow">
        <h2 className="text-2xl md:text-4xl font-bold">{friends.length}</h2>
        <p className="text-[#64748b]">Total Friends</p>
      </div>
      <div className="p-2 md:p-10 text-center rounded-2xl bg-white md:w-1/5  shadow">
        <h2 className="text-2xl md:text-4xl font-bold">{onTrack}</h2>
        <p className="text-[#64748b]">On Track</p>
      </div>
      <div className="p-2 md:p-10 text-center rounded-2xl bg-white md:w-1/5  shadow">
        <h2 className="text-2xl md:text-4xl font-bold">10</h2>
        <p className="text-[#64748b]">Need Attention</p>
      </div>
      <div className="p-2 md:p-10 text-center rounded-2xl md:w-1/5 bg-white shadow">
        <h2 className="text-2xl md:text-4xl font-bold">10</h2>
        <p className="text-[#64748b]">Interactions This Month</p>
      </div>
    </div>
  );
};

export default Tab;
