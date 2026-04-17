import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContactContext = createContext();

const FriendContactProvider = ({ children }) => {
  const [friendContact, setFriendContact] = useState([]);
  const [filterActive, setFilterActive] = useState("all");

  const filterList =
    filterActive === "all"
      ? friendContact
      : friendContact.filter((item) => item.action === filterActive);

  const handleAction = (person, type) => {
    const date = new Date();

    const updatePerson = {
      ...person,
      last_contact_time: date.toLocaleTimeString(),
      last_contact_date: date.toDateString(),
      action: type,
    };
    toast.success(`${type} with ${person.name}`);
    setFriendContact([...friendContact, updatePerson]);
  };

  const data = {
    handleAction,
    friendContact,
    setFriendContact,
    filterList,
    filterActive,
    setFilterActive,
  };
  return (
    <FriendContactContext.Provider value={data}>
      {children}
    </FriendContactContext.Provider>
  );
};

export default FriendContactProvider;
