import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../App.css';
import './contact.css'



const ContactButtons = ({setIsEditing}) => {
  return (
    <div className="buttons">
      <button className= "button-edit" onClick={() => setIsEditing(true)}>
        <FaEdit />
      </button>
      <button className= "button-delete">
        <FaTrash />
      </button>
    </div>
  );
}

export default ContactButtons;
