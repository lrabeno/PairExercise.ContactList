import React from "react";

export const ContactRow = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact) => {
        return (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
          </tr>
        );
      })}
    </>
  );
};
