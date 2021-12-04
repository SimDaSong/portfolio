import React from "react";

import SubTitle from "@/components/SubTitle";
import Link from "@/components/Link";
import { contacts } from "./data";

type Props = {
  className: string;
};

const classes = {
  contactWrap: "grid grid-rows-1 gap-5 lg:px-6",
  contactContentWrap: "leading-7",
  contactName: "font-bold text-default mr-2",
};

const Contact = (props: Props) => {
  return (
    <div className={`${props.className} ${classes.contactWrap}`}>
      <SubTitle>CONTACT</SubTitle>
      <div className={classes.contactContentWrap}>
        {contacts.map((contact, idx) => (
          <p key={idx} className="break-all">
            <span className={classes.contactName}>{contact.name}</span>
            <Link href={contact.link}>{contact.text || contact.link}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Contact;
