import React from "react";

const Tab = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4">
      <div className="p-10 text-center rounded-2xl w-auto md:w-1/5 shadow-xl">
        <h2 className="text-4xl font-bold">10</h2>
        <p className="text-[#64748b]">Total Friends</p>
      </div>
      <div className="p-10 text-center rounded-2xl   w-auto md:w-1/5  shadow-xl">
        <h2 className="text-4xl font-bold">10</h2>
        <p className="text-[#64748b]">On Track</p>
      </div>
      <div className="p-10 text-center rounded-2xl w-auto md:w-1/5  shadow-xl">
        <h2 className="text-4xl font-bold">10</h2>
        <p className="text-[#64748b]">Need Attention</p>
      </div>
      <div className="p-10 text-center rounded-2xl  w-auto md:w-1/5  shadow-xl">
        <h2 className="text-4xl font-bold">10</h2>
        <p className="text-[#64748b]">Interactions This Month</p>
      </div>
    </div>
  );
};

export default Tab;
