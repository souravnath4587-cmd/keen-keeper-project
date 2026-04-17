import React, { createContext, useState } from "react";

export const FriendContactContext = createContext();

const FriendContactProvider = ({ children }) => {
  const [friendContact, setFriendContact] = useState([]);
  const [filterActive, setFilterActive] = useState("all");

  const filterList =
    filterActive === "all"
      ? friendContact
      : friendContact.filter((item) => item.action === filterActive);

  // const timeGap = 5 * 60 * 1000; // 5 minutes

  const handleAction = (person, type) => {
    const date = new Date();
    // const lastAction = friendContact.find((item) => item.id === person.id);
    // console.log(lastAction);

    // if (lastAction) {
    //   const lastTime = new Date(lastAction.fullTime);
    //   const diff = date - lastTime;
    //   console.log(diff);

    //   if (diff < timeGap) {
    //     alert("⏳ Please wait at least 5 minutes!");
    //     return;
    //   }
    // }

    const updatePerson = {
      ...person,
      last_contact_time: date.toLocaleTimeString(),
      last_contact_date: date.toDateString(),
      action: type,
      // fullTime: date,
    };
    setFriendContact([...friendContact, updatePerson]);

    console.log(friendContact);
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
