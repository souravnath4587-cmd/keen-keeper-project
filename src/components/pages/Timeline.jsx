import React, { useContext } from "react";
import { FriendContactContext } from "../context/FriendContactProvider";
import DropDown from "../ui/DropDown";
import call from "../../assets/call.png";
import text from "../../assets/text.png";
import video from "../../assets/video.png";

const Timeline = () => {
  const { friendContact } = useContext(FriendContactContext);
  console.log(friendContact);

  return (
    <div className="container mx-auto bg-[#f7f5f8ec] py-2">
      <h2 className="text-4xl font-bold py-6 mt-4">TimeLine</h2>
      <DropDown />
      {friendContact.map((item) => (
        <div className="flex flex-row justify-start items-center gap-4 rounded-xl p-4 my-4 bg-white mx-2">
          <div className="">
            <img
              src={`${(item.action === "call" && call) || (item.action === "text" && text) || (item.action === "video" && video)} `}
              alt=""
            />
          </div>
          <div>
            <h4>
              <span className="text-xl font-bold">{`${(item.action === "call" && "MeetUp") || (item.action === "text" && "Text") || (item.action === "video" && "Video")}`}</span>{" "}
              with {item.name}
            </h4>
            <p>
              {item.last_contact_time} | {item.last_contact_date}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
