import React from "react";

export default function ContactRow({ contacts }) {
  return (
    <tr>
      <td>{contacts.name}</td>
      <td>{contacts.email}</td>
      <td>{contacts.phone}</td>
    </tr>
  );
}
