import React from "react";

const EmptyPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-16 text-center h-screen">
        {/* Icon */}
        <div className="text-5xl mb-4">📭</div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-[#244d3f] mb-2">
          No Activity Yet
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm max-w-sm">
          You haven't contacted anyone yet. Start by calling, texting, or video
          chatting with your friends.
        </p>
      </div>
    </div>
  );
};

export default EmptyPage;
