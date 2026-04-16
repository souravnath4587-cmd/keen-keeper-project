import React from "react";
import { useLoaderData, useParams } from "react-router";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdText } from "react-icons/io";
import { FaArchive, FaVideo } from "react-icons/fa";
import { RiNotificationSnoozeFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

const FriendDetails = () => {
  const friendDetails = useLoaderData();
  const { id } = useParams();
  const expectedFriend = friendDetails.find(
    (friend) => friend.id === parseInt(id),
  );
  console.log(expectedFriend);
  const {
    picture,
    name,
    days_since_contact,
    // tags,
    status,
    goal,
    next_due_date,
    work,
    email,
  } = expectedFriend;

  return (
    <div className="flex flex-row gap-4 justify-center items-center my-20">
      <div>
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
        <div className="rounded-xl p-2 shadow flex flex-row gap-2 justify-center items-center  my-4">
          <RiNotificationSnoozeFill />
          Snooze 2 Weeks
        </div>
        <div className="rounded-xl p-2 shadow flex flex-row gap-2 justify-center items-center  mb-4">
          <FaArchive />
          Archive
        </div>
        <div className="rounded-xl p-2 shadow flex flex-row gap-2 justify-center items-center  text-red-400">
          <MdDelete />
          Delete
        </div>
      </div>

      <div className="space-y-8">
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
            <h4 className="text-2xl text-[#244d3f] font-bold">
              {next_due_date}
            </h4>
            <p className="text-[#64748b]">Next Due</p>
          </div>
        </div>
        <div className="rounded-2xl shadow p-4 flex flex-row justify-between">
          <div className="space-y-4">
            <h4 className="text-xl text-[#244d3f]">Relationship Goal</h4>
            <p className="text-[#64748b]">
              Connect Every{" "}
              <span className="text-black font-bold">30 Days</span>
            </p>
          </div>
          <button className="btn">Edit</button>
        </div>
        <div className="rounded-2xl shadow p-4">
          <h4 className="text-xl text-[#244d3f] my-4">Quick Check In</h4>
          <div className="flex flex-row justify-between items-center gap-2">
            <div className="bg-[#f5f3f7] rounded-xl px-12 py-6 flex flex-col items-center space-y-2">
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
    </div>
  );
};

export default FriendDetails;
