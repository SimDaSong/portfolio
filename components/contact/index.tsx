import React from "react";

import globalClasses from "@/styles/global-classes";
import SubTitle from "@/components/SubTitle";
import { contacts } from "@/utils/data";

type Props = {
  className: string;
};

const classes = {
  contactWrap: "grid grid-rows-1 gap-6 lg:px-6",
};

const Contact = (props: Props) => {
  return (
    <div className={`${props.className} ${classes.contactWrap}`}>
      <SubTitle>CONTACT</SubTitle>
      <div>
        {contacts.map((contact, idx) => (
          <p key={idx} className="break-all">
            <span className="font-bold">{contact.name}: </span>
            <span className={globalClasses.link}>
              <a href={contact.link}>{contact.text || contact.link}</a>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Contact;
