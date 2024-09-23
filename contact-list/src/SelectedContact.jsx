import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact({
  setSelectedContactId,
  selectedContactId,
}) {
  const [contact, setContact] = useState(selectedContactId);

  useEffect(() => {
    async function singleView() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("there was an error in the GET");
      }
    }
    singleView();
  }, [selectedContactId]);

  console.log(contact);
  return (
    <div>
      <h1>Name:{contact.name}</h1>
      <h2>Username:{contact.username}</h2>
      <h2>Email:{contact.email}</h2>
      <h2>Phone:{contact.phone}</h2>
      <h2>Website:{contact.website}</h2>
    </div>
  );
}
