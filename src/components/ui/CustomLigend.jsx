import React from "react";

const CustomLigend = () => {
  return (
    <div className="flex justify-center gap-6 mt-4 text-sm">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#7c3aed]"></span>
        <p>Call</p>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#22c55e]"></span>
        <p>Text</p>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#14532d]"></span>
        <p>Video</p>
      </div>
    </div>
  );
};

export default CustomLigend;
