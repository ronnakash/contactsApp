import React from "react";
import { Plus } from 'react-bootstrap-icons';

function NewContactButton({ setIsAdding }) {
    return (
        <button onClick={ e => setIsAdding(true) }>
            <Plus size={16} />
        </button>  
    );
  }
  
  export default NewContactButton;