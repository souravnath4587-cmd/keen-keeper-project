import React, { useContext } from "react";
import { FriendContactContext } from "../context/FriendContactProvider";
import DropDown from "../ui/DropDown";
import call from "../../assets/call.png";

const Timeline = () => {
  const { friendCallContact } = useContext(FriendContactContext);
  console.log(friendCallContact);

  return (
    <div className="container mx-auto bg-[#f7f5f8ec]">
      <h2 className="text-4xl font-bold py-6 mt-4">TimeLine</h2>
      <DropDown />
      {friendCallContact.map((item) => (
        <div className="flex flex-row justify-start items-center gap-4 rounded-xl p-4 bg-white mx-2">
          <div className="">
            <img src={`${friendCallContact && call}`} alt="" />
          </div>
          <div>
            <h4>
              <span className="text-xl font-bold">{`${friendCallContact && "MeetUp"}`}</span>{" "}
              with {item.name}
            </h4>
            <p>{item.last_contact_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
