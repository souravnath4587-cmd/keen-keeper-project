import React, { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { FriendContactContext } from "../context/FriendContactProvider";

const RightCard = ({ expectedFriend }) => {
  const { handleCall } = useContext(FriendContactContext);

  const { days_since_contact, goal, next_due_date } = expectedFriend;
  return (
    <div className=" rightCard space-y-8">
      <div className="flex flex-row justify-center items-center gap-4">
        <div className="rounded-2xl p-4 text-center shadow">
          <h4 className="text-2xl text-[#244d3f] font-bold">
            {days_since_contact}
          </h4>
          <p className="text-[#64748b]">Days since contact</p>
        </div>
        <div className="rounded-2xl p-4 text-center shadow">
          <h4 className="text-2xl text-[#244d3f] font-bold">{goal}</h4>
          <p className="text-[#64748b]">Goal Days</p>
        </div>
        <div className="rounded-2xl p-4 text-center shadow">
          <h4 className="text-2xl text-[#244d3f] font-bold">{next_due_date}</h4>
          <p className="text-[#64748b]">Next Due</p>
        </div>
      </div>
      <div className="rounded-2xl shadow p-4 flex flex-row justify-between">
        <div className="space-y-4">
          <h4 className="text-xl text-[#244d3f]">Relationship Goal</h4>
          <p className="text-[#64748b]">
            Connect Every <span className="text-black font-bold">30 Days</span>
          </p>
        </div>
        <button className="btn">Edit</button>
      </div>
      <div className="rounded-2xl shadow p-4">
        <h4 className="text-xl text-[#244d3f] my-4">Quick Check In</h4>
        <div className="flex flex-row justify-between items-center gap-2">
          <div
            onClick={() => handleCall(expectedFriend)}
            className="bg-[#f5f3f7] rounded-xl px-12 py-6 flex flex-col items-center space-y-2"
          >
            <BsFillTelephoneFill size={25} />
            <p className="text-[#64748b]">Call</p>
          </div>
          <div className="bg-[#f5f3f7] rounded-xl px-12 py-6 flex flex-col items-center space-y-2">
            <IoMdText size={25} />
            <p className="text-[#64748b]">Text</p>
          </div>
          <div className="bg-[#f5f3f7] rounded-xl px-12 py-6  flex flex-col items-center space-y-2">
            <FaVideo size={25} />
            <p className="text-[#64748b]">Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
