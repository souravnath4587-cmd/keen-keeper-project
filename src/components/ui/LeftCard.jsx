import React from "react";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiNotificationSnoozeFill } from "react-icons/ri";

const LeftCard = ({ expectedFriend }) => {
  const { picture, name, status, work, email } = expectedFriend;
  return (
    <div className="leftCard">
      <div className=" rounded-xl p-8 shadow flex flex-col justify-center items-center">
        <div className="w-24 rounded-full  overflow-hidden">
          <img src={picture} alt="" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          <div className="flex flex-col items-center justify-center">
            {/* <div className="flex flex-row gap-2">
                {tags.map((tag) => (
                  <p className="badge badge-soft badge-secondary capitalize">
                    {tag}
                  </p>
                ))}
              </div> */}
            <div className="badge badge-success my-2">{status}</div>
            <p className="w-[200px] text-[#64748b]">{work}</p>
            <p className="w-[200px] text-[#64748b]">{email}</p>
          </div>
        </div>
      </div>
      <button className="rounded-xl btn p-2 w-full shadow flex flex-row gap-2 justify-center items-center  my-4">
        <RiNotificationSnoozeFill />
        Snooze 2 Weeks
      </button>
      <button className="rounded-xl btn w-full p-2 shadow flex flex-row gap-2 justify-center items-center  mb-4">
        <FaArchive />
        Archive
      </button>
      <button className="rounded-xl btn w-full p-2 shadow flex flex-row gap-2 justify-center items-center  text-red-400">
        <MdDelete />
        Delete
      </button>
    </div>
  );
};

export default LeftCard;
