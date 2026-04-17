import React, { useContext } from "react";
import { FriendContactContext } from "../context/FriendContactProvider";

const DropDown = () => {
  const { setFilterActive } = useContext(FriendContactContext);

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
          <li onClick={() => setFilterActive("all")}>
            <a>all</a>
          </li>
          <li onClick={() => setFilterActive("call")}>
            <a>Call</a>
          </li>
          <li onClick={() => setFilterActive("text")}>
            <a>Text</a>
          </li>
          <li onClick={() => setFilterActive("video")}>
            <a>Video</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
