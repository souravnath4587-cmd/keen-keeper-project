import React, { createContext, useState } from "react";

export const FriendContactContext = createContext();

const FriendContactProvider = ({ children }) => {
  const [friendCallContact, setFriendCallContact] = useState([]);

  const handleCall = (person) => {
    const date = new Date();
    // console.log("Call Button is clicked....", person.name, date.toDateString());

    const isPersonExist = friendCallContact.find((con) => con.id == person.id);

    if (isPersonExist) {
      alert("I already contact with this person....");
    } else {
      const updatePerson = {
        ...person,
        last_contact_date: date.toDateString(),
      };
      setFriendCallContact([...friendCallContact, updatePerson]);
    }
    console.log(friendCallContact);
  };

  const data = {
    handleCall,
    friendCallContact,
    setFriendCallContact,
  };
  return (
    <FriendContactContext.Provider value={data}>
      {children}
    </FriendContactContext.Provider>
  );
};

export default FriendContactProvider;
