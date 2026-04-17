import React from "react";
import { Link } from "react-router";

const Friend = ({ friend }) => {
  const { name, picture, status, days_since_contact, tags } = friend;

  return (
    <Link to={`/friendDetails/${friend.id}`}>
      <div className=" rounded-xl bg-white p-8 shadow-xl flex flex-col justify-center items-center">
        <div className="w-24 rounded-full  overflow-hidden">
          <img src={picture} alt="" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-[#64748b]">{days_since_contact}D ago</p>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row gap-2">
              {tags.map((tag) => (
                <p className="badge badge-soft badge-secondary capitalize">
                  {tag}
                </p>
              ))}
            </div>
            <div
              className={`badge ${(status == "almost due" && "badge-secondary") || (status === "on-track" && "badge-warning") || (status === "overdue" && "badge-success")} my-2`}
            >
              {status}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Friend;
