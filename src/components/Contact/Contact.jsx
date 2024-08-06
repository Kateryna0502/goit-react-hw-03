import React from 'react';
import css from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = ({
  id,
  name,
  number,
onDeleteProfile}) => {
  return (
    <div className={css.div}>
          <p className={css.p}>{id}</p>
      <p className={css.p}>
        <FaUserAlt/>
        {name}</p>
      <p className={css.p}>
        <FaPhoneVolume/>
        {number}</p>
          <button className={css.btn} type='button' onClick={() => onDeleteProfile(id)}>Delete</button>
    </div>
  )
}

export default Contact
