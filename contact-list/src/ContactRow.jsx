import React from "react";

export default function ContactRow({ setSelectedContactId, contacts }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contacts.id);
      }}
    >
      <td>{contacts.name}</td>
      <td>{contacts.email}</td>
      <td>{contacts.phone}</td>
    </tr>
  );
}
