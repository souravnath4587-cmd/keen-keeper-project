import React from "react";

const DropDown = () => {
  return (
    <div>
      <div className="dropdown dropdown-bottom">
        <div tabIndex={0} role="button" className="btn m-1">
          Filter Timeline ⬇️
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <a>Call</a>
          </li>
          <li>
            <a>Text</a>
          </li>
          <li>
            <a>Video</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
