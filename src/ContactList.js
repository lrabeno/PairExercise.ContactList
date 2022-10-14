import React from "react";
import { ContactRow } from "./ContactRow";

export const ContactList = ({ contacts }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        <ContactRow contacts={contacts} />
      </tbody>
    </table>
  );
};
