import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../App.css';
import './contact.css'



const ContactButtons = ({}) => {
  return (
    <div className="buttons">
      <button className= "button-edit">
        <FaEdit />
      </button>
      <button className= "button-delete">
        <FaTrash />
      </button>
    </div>
  );
}

export default ContactButtons;
